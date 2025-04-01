import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../core/interfaces/common';
import { heroquestCardsMock } from '../../core/constants/example-cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  featuredCards: Card[] = heroquestCardsMock;
}
