import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input() inputAttributes: HTMLInputElement = {} as HTMLInputElement;
  @Input() label!: string;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputAttributes.value = target.value;
    this.valueChange.emit(this.inputAttributes.value);
  }
}
