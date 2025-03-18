import {
  Component,
  effect,
  HostListener,
  input,
  Input,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayerConfig } from 'konva/lib/Layer';
import { StageConfig } from 'konva/lib/Stage';
import { ImageConfig } from 'konva/lib/shapes/Image';
import { RectConfig } from 'konva/lib/shapes/Rect';
import { TextConfig } from 'konva/lib/shapes/Text';
import { TransformerConfig } from 'konva/lib/shapes/Transformer';
import { CoreShapeComponent, StageComponent } from 'ng2-konva';
import { CANVAS_HEIGHT, CANVAS_WIDTH, TEXT_LINE_HEIGHT } from '../constants';
import Konva from 'konva';

const attributesConfigTitle: TextConfig = {
  y: 854,
  width: 140,
  fontFamily: 'CarterSansW01-Bold',
  fontSize: 27,
  align: 'center',
  verticalAlign: 'middle',
  wrap: 'word',
  fill: '#340000',
};

const attributesConfigValue: TextConfig = {
  width: 140,
  fontFamily: 'CarterSansW01-Bold',
  fontSize: 62,
  align: 'center',
  verticalAlign: 'middle',
  fill: '#340000',
};

@Component({
  selector: 'app-card-builder-canvas',
  imports: [StageComponent, CoreShapeComponent, FormsModule],
  templateUrl: './card-builder-canvas.component.html',
  styleUrl: './card-builder-canvas.component.scss',
})
export class CardBuilderCanvasComponent implements OnInit, OnDestroy {
  monsterNameInput = input<string>('');
  movementSquaresInput = input<number>(1);
  attackDiceInput = input<number>(1);
  defendDiceInput = input<number>(1);
  bodyPointsInput = input<number>(1);
  mindPointsInput = input<number>(1);

  @Input() set monsterImage(image: HTMLImageElement) {
    this.onMonsterImageUpload(image);
  }

  @Input() set monsterIcon(icon: HTMLImageElement) {
    this.onMonsterIconUpload(icon);
  }

  @Input() set descriptionInput(description: string) {
    this.onDescriptionInputChange(description);
  }

  @ViewChild(StageComponent) stageComponent!: StageComponent;
  @ViewChild('monsterMovableImage', { static: false })
  monsterMovableImage!: CoreShapeComponent;
  @ViewChild('layer') layer!: CoreShapeComponent;
  @ViewChild('dragLayer') dragLayer!: CoreShapeComponent;
  @ViewChild('descriptionBox') descriptionBox!: CoreShapeComponent;
  @ViewChild('statsBox') statsBox!: CoreShapeComponent;

  configBgImage!: ImageConfig;
  configAttributesBoxImage!: ImageConfig;
  configMonsterMovableImage!: ImageConfig;
  configMonsterIcon!: ImageConfig;
  isTransformEnabled = false;
  description = '';

  onKeydown(): void {
    this.detachTransformerFromImage();
  }

  constructor() {
    // Resize stage when window is resized
    this.fitStageIntoParentContainer();

    effect(() => {
      this.onMonsterNameInputChange(this.monsterNameInput());
    });

    effect(() => {
      this.onMovementSquaresInputChange(this.movementSquaresInput());
    });

    effect(() => {
      this.onAttackDiceInputChange(this.attackDiceInput());
    });

    effect(() => {
      this.onDefendDiceInputInputChange(this.defendDiceInput());
    });

    effect(() => {
      this.onBodyPointsInputChange(this.bodyPointsInput());
    });

    effect(() => {
      this.onMindPointsInputChange(this.mindPointsInput());
    });
  }

  @HostListener('window:resize')
  fitStageIntoParentContainer() {
    const container = document.querySelector('.stage-parent') as HTMLElement;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const scale = containerWidth / CANVAS_WIDTH;

    this.configStage = {
      ...this.configStage,
      width: CANVAS_WIDTH * scale,
      height: CANVAS_HEIGHT * scale,
      scale: { x: scale, y: scale },
    };

    if (this.configBgImage?.image) {
      this.updateBackgroundConfig(this.configBgImage.image as HTMLImageElement);
    }
  }

  public configStage: Partial<StageConfig> = {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  };

  public layerConfig: LayerConfig = {
    clipFunc: ctx => {
      const x = 0;
      const y = 0;
      const width = CANVAS_WIDTH;
      const height = CANVAS_HEIGHT;
      const radius = 60;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.clip();
    },
  };

  public borderRectConfig: RectConfig = {
    x: 25,
    y: 25,
    width: CANVAS_WIDTH - 50,
    height: CANVAS_HEIGHT - 50,
    stroke: '#340000',
    strokeWidth: 4,
    cornerRadius: 40,
    dash: [20, 10],
    listening: false,
    fillEnabled: false,
  };

  public transformerConfig: TransformerConfig = {
    boundBoxFunc: (oldBox, newBox) => {
      if (newBox.width < 200 || newBox.height < 200) {
        return oldBox;
      }
      return newBox;
    },
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    anchorSize: 16,
    anchorStrokeWidth: 4,
    anchorCornerRadius: 10,
    borderStrokeWidth: 4,
    anchorStroke: 'rgb(30 64 175)',
    anchorFill: 'white',
    borderDash: [16, 8],
    borderStroke: 'rgb(30 64 175)',
  };

  public configName: TextConfig = {
    x: 5,
    y: 90,
    width: this.configStage.width,
    fontSize: 52,
    fontFamily: 'CarterSansW01-Bold',
    preventDefault: false,
    align: 'center',
    text: 'Frozen Horror',
    wrap: 'none',
    fill: '#340000',
  };

  public configDescription: TextConfig = {
    x: 80,
    y: 1017,
    width: 640,
    fontFamily: 'CarterSansW01-Bold',
    fontSize: 27,
    text: '',
    verticalAlign: 'bottom',
    wrap: 'true',
    fill: '#340000',
  };

  public attributesBoxGroupConfig: Partial<StageConfig> = {};

  public movementText: TextConfig = {
    ...attributesConfigTitle,
    x: 100,
    text: 'Movement Squares',
  };

  public attackText: TextConfig = {
    ...attributesConfigTitle,
    x: 245,
    text: 'Attack Dice',
  };

  public defendText: TextConfig = {
    ...attributesConfigTitle,
    x: 362,
    text: 'Defend Dice',
  };

  public bodyText: TextConfig = {
    ...attributesConfigTitle,
    x: 477,
    text: 'Body Points',
  };

  public mindText: TextConfig = {
    ...attributesConfigTitle,
    x: 590,
    text: 'Mind Points',
  };

  public movementValue: TextConfig = {
    ...attributesConfigValue,
    x: 100,
    y: this.getStatsTextDisplacement(1),
    text: '1',
  };

  public attackValue: TextConfig = {
    ...attributesConfigValue,
    x: 245,
    y: this.getStatsTextDisplacement(1),
    text: '1',
  };

  public defendValue: TextConfig = {
    ...attributesConfigValue,
    x: 362,
    y: this.getStatsTextDisplacement(1),
    text: '1',
  };

  public bodyValue: TextConfig = {
    ...attributesConfigValue,
    x: 477,
    y: this.getStatsTextDisplacement(1),
    text: '1',
  };

  public mindValue: TextConfig = {
    ...attributesConfigValue,
    x: 590,
    y: this.getStatsTextDisplacement(1),
    text: '1',
  };

  ngOnInit() {
    this.setStartingImages();
    document.addEventListener('keydown', this.onKeydown.bind(this));
  }

  onMonsterNameInputChange(value: string): void {
    this.configName = {
      ...this.configName,
      text: value,
    };
  }

  onMovementSquaresInputChange(value: number): void {
    this.movementValue = {
      ...this.movementValue,
      text: value.toString(),
      y: this.getStatsTextDisplacement(value),
    };
  }

  onAttackDiceInputChange(value: number): void {
    this.attackValue = {
      ...this.attackValue,
      text: value.toString(),
      y: this.getStatsTextDisplacement(value),
    };
  }

  onDefendDiceInputInputChange(value: number): void {
    this.defendValue = {
      ...this.defendValue,
      text: value.toString(),
      y: this.getStatsTextDisplacement(value),
    };
  }

  onBodyPointsInputChange(value: number): void {
    this.bodyValue = {
      ...this.bodyValue,
      text: value.toString(),
      y: this.getStatsTextDisplacement(value),
    };
  }

  onMindPointsInputChange(value: number): void {
    this.mindValue = {
      ...this.mindValue,
      text: value.toString(),
      y: this.getStatsTextDisplacement(value),
    };
  }

  onDescriptionInputChange(description: string): void {
    this.description = description;

    this.configDescription = {
      ...this.configDescription,
      text: this.description,
    };

    if (this.descriptionBox) {
      this.resizeDescriptionBox();
      this.displaceStatsBox();
      this.displaceMonsterIcon();
    }
  }

  resizeDescriptionBox() {
    const descriptionBox = this.descriptionBox.getStage();

    const numberOfTextLines = this.description
      ? descriptionBox.getSize().height / TEXT_LINE_HEIGHT
      : 0;

    this.configDescription = {
      ...this.configDescription,
      y: 1017 - numberOfTextLines * TEXT_LINE_HEIGHT,
    };
  }

  displaceStatsBox() {
    const descriptionBox = this.descriptionBox.getStage();

    const numberOfTextLines = this.description
      ? descriptionBox.getSize().height / TEXT_LINE_HEIGHT
      : 0;

    this.attributesBoxGroupConfig = {
      ...this.attributesBoxGroupConfig,
      y: -numberOfTextLines * TEXT_LINE_HEIGHT,
    };
  }

  displaceMonsterIcon() {
    const descriptionBox = this.descriptionBox.getStage();

    const numberOfTextLines = this.description
      ? descriptionBox.getSize().height / TEXT_LINE_HEIGHT
      : 0;

    this.configMonsterIcon = {
      ...this.configMonsterIcon,
      y: 675 - numberOfTextLines * TEXT_LINE_HEIGHT,
    };
  }

  onMonsterImageUpload(image: HTMLImageElement): void {
    if (!image) return;

    const scale = Math.min(
      CANVAS_WIDTH / image.width,
      CANVAS_HEIGHT / image.height
    );

    const imageNewWidth = Math.round(image.width * scale);
    const imageNewHeight = Math.round(image.height * scale);

    this.configMonsterMovableImage = {
      image: image,
      x: 100,
      y: 100,
      width: imageNewWidth - 150,
      height: imageNewHeight - 150,
      draggable: true,
    };

    this.attachTransformerToImage();
  }

  onMonsterIconUpload(icon: HTMLImageElement): void {
    if (!icon) return;

    this.configMonsterIcon = {
      image: icon,
      x: 100,
      y: 675,
      height: 140,
    };
  }

  attachTransformerToImage(): void {
    const monsterImage = this.monsterMovableImage.getStage();
    const dragLayer = this.dragLayer.getStage();

    this.transformerConfig = {
      ...this.transformerConfig,
      nodes: [monsterImage],
    };

    monsterImage.moveTo(dragLayer);
  }

  detachTransformerFromImage(): void {
    const monsterImage = this.monsterMovableImage.getStage();
    const initialLayer = this.layer.getStage();

    this.transformerConfig = {
      ...this.transformerConfig,
      nodes: [],
    };

    monsterImage.moveTo(initialLayer);
    monsterImage.setZIndex(1);
  }

  setStartingImages(): void {
    const backgroundImg = new Image();
    const attributesBoxImage = new Image();
    backgroundImg.src = 'assets/card-monster/bg.webp';
    attributesBoxImage.src = 'assets/card-monster/attributes-box.webp';

    backgroundImg.onload = () => {
      this.updateBackgroundConfig(backgroundImg);
    };

    attributesBoxImage.onload = () => {
      this.configAttributesBoxImage = {
        image: attributesBoxImage,
        x: 57,
        y: 827,
      };
    };
  }

  updateBackgroundConfig(image: HTMLImageElement) {
    const scaleX = this.configStage.scale?.x || 1;
    const scaleY = this.configStage.scale?.y || 1;

    this.configBgImage = {
      image,
      width: (this.configStage?.width ?? CANVAS_WIDTH) / scaleX, // Compensate for stage scale
      height: (this.configStage?.height ?? CANVAS_HEIGHT) / scaleY, // Compensate for stage scale
      x: 0,
      y: 0,
    };
  }

  getStatsTextDisplacement(stat: number): number {
    if (stat === 6 || stat === 8) {
      return 921;
    } else if (stat === 1 || stat === 2) {
      return 917;
    } else {
      return 912;
    }
  }

  getCanvasDataURL() {
    // Create a copy of the stage with a higher resolution
    const highResStage = new Konva.Stage({
      container: document.createElement('div'), // Off-screen container
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });

    this.stageComponent.getStage().children.forEach(layer => {
      const clonedLayer = layer.clone();
      highResStage.add(clonedLayer);
      clonedLayer.draw();
    });

    const dataURL = highResStage.toDataURL({
      pixelRatio: 1,
      mimeType: 'image/png',
    });

    // Removes all layers, shapes, and memory usage
    highResStage.destroy();

    return dataURL;
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeydown.bind(this));
  }
}
