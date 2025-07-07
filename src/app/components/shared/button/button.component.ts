import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  text = input.required<string>();
  color = input<string>('primary');
  iconName = input<IconName | ''>('');
  iconSize = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input<boolean>(false);
  rounded = input<boolean>(false);

  onClick = output<void>();

  get iconNameValue(): IconName | null {
    return this.iconName() || null;
  }

  onButtonClick(): void {
    this.onClick.emit();
  }
}
