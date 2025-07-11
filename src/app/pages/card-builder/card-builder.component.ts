import { Component, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CardBuilderCanvasComponent } from './canvas/card-builder-canvas.component';
import { CardBuilderFormComponent } from './form/card-builder-form.component';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-card-builder',
  imports: [
    CardBuilderCanvasComponent,
    CardBuilderFormComponent,
    ButtonComponent,
  ],
  templateUrl: './card-builder.component.html',
  styleUrl: './card-builder.component.scss',
})
export class CardBuilderComponent {
  @ViewChild(CardBuilderCanvasComponent)
  cardCanvas!: CardBuilderCanvasComponent;
  monsterNameInput = 'Skeleton King';
  movementSquaresInput = 8;
  attackDiceInput = 6;
  defendDiceInput = 6;
  bodyPointsInput = 6;
  mindPointsInput = 4;
  descriptionInput = '';
  monsterImage!: HTMLImageElement;
  monsterIcon!: HTMLImageElement;
  isBrowser = false;

  platformId = inject(PLATFORM_ID);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  onMonsterNameChange(value: string): void {
    this.monsterNameInput = value;
  }

  onMovementSquaresChange(value: number): void {
    this.movementSquaresInput = value;
  }

  onAttackDiceChangeChange(value: number): void {
    this.attackDiceInput = value;
  }

  onDefendDiceChangeChange(value: number): void {
    this.defendDiceInput = value;
  }

  onBodyPointsChangeChange(value: number): void {
    this.bodyPointsInput = value;
  }

  onMindPointsChangeChange(value: number): void {
    this.mindPointsInput = value;
  }

  onDescriptionInputChange(description: string): void {
    this.descriptionInput = description;
  }

  onMonsterImageUpload(image: HTMLImageElement): void {
    this.monsterImage = image;
  }

  onMonsterIconUpload(icon: HTMLImageElement): void {
    this.monsterIcon = icon;
  }

  onDownloadCard() {
    const dataURL = this.cardCanvas.getCanvasDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `HQ_MONS_${this.monsterNameInput.replace(/\s+/g, '_').toLowerCase()}.png`;
    link.click();
  }
}
