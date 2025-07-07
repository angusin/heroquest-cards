import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  text = input.required<string>();
  color = input<string>('primary');
  iconName = input<string>('');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input<boolean>(false);
  rounded = input<boolean>(false);

  onClick = output<void>();

  onButtonClick(): void {
    this.onClick.emit();
  }
}
