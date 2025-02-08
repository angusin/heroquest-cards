import { Component } from '@angular/core';
import { CardBuilderCanvasComponent } from './canvas/card-builder-canvas.component';
import { CardBuilderFormComponent } from './form/card-builder-form.component';

@Component({
  selector: 'app-card-builder',
  imports: [CardBuilderCanvasComponent, CardBuilderFormComponent],
  templateUrl: './card-builder.component.html',
  styleUrl: './card-builder.component.scss',
})
export class CardBuilderComponent {
  descriptionInput = '';
  monsterImage!: HTMLImageElement;
  monsterIcon!: HTMLImageElement;

  onDescriptionInputChange(description: string): void {
    this.descriptionInput = description;
  }

  onMonsterImageUpload(image: HTMLImageElement): void {
    this.monsterImage = image;
  }

  onMonsterIconUpload(icon: HTMLImageElement): void {
    this.monsterIcon = icon;
  }
}
