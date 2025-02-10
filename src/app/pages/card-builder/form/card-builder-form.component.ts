import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-builder-form',
  imports: [],
  standalone: true,
  templateUrl: './card-builder-form.component.html',
  styleUrl: './card-builder-form.component.scss',
})
export class CardBuilderFormComponent {
  @Output() descriptionInputChange = new EventEmitter<string>();
  @Output() monsterImageUpload = new EventEmitter<HTMLImageElement>();
  @Output() monsterIconUpload = new EventEmitter<HTMLImageElement>();

  onDescriptionInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.descriptionInputChange.emit(input.value);
  }

  onMonsterImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result as string; // Load the file's data URL into the image
      image.onload = () => {
        this.monsterImageUpload.emit(image); // Emit the HTMLImageElement
      };
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  }

  onMonsterIconUpload(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result as string; // Load the file's data URL into the image
      image.onload = () => {
        this.monsterIconUpload.emit(image); // Emit the HTMLImageElement
      };
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  }
}
