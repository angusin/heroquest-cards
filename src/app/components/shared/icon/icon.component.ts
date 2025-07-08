import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName =
  | 'download'
  | 'heart'
  | 'heart-filled'
  | 'star'
  | 'star-filled'
  | 'arrow-right'
  | 'arrow-left'
  | 'close'
  | 'menu'
  | 'search'
  | 'edit'
  | 'delete'
  | 'share'
  | 'save'
  | 'copy'
  | 'check'
  | 'plus'
  | 'minus'
  | 'play'
  | 'pause'
  | 'settings';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name = input.required<IconName>();
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  color = input<string>('currentColor');
  className = input<string>('');
}
