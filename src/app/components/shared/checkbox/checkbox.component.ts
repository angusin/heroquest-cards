import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() name!: string;
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
}
