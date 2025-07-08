import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-card-builder-form',
  templateUrl: './card-builder-form.component.html',
  styleUrl: './card-builder-form.component.scss',
})
export class CardBuilderFormComponent {
  @Output() monsterImageUpload = new EventEmitter<HTMLImageElement>();
  @Output() monsterIconUpload = new EventEmitter<HTMLImageElement>();
  descriptionInputChange = output<string>();
  monsterNameChange = output<string>();
  movementSquaresChange = output<number>();
  attackDiceChange = output<number>();
  defendDiceChange = output<number>();
  bodyPointsChange = output<number>();
  mindPointsChange = output<number>();

  // Track selected file names
  selectedMonsterImageName = '';
  selectedMonsterIconName = '';

  onMonsterNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.monsterNameChange.emit(input.value);
  }

  onMovementSquaresChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.movementSquaresChange.emit(+input.value);
  }

  onDefendDiceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.defendDiceChange.emit(+input.value);
  }

  onMindPointsChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.mindPointsChange.emit(+input.value);
  }

  onAttackDiceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.attackDiceChange.emit(+input.value);
  }

  onBodyPointsChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.bodyPointsChange.emit(+input.value);
  }

  onDescriptionInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.descriptionInputChange.emit(input.value);
  }

  onMonsterImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    // Store the filename
    this.selectedMonsterImageName = file.name;

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

    // Store the filename
    this.selectedMonsterIconName = file.name;

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
