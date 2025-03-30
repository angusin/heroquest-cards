import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-tos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoTosComponent {
  currentDate = new Date();
}
