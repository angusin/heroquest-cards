import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPrivacyComponent {
  currentDate = new Date();
}
