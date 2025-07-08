import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../../../core/interfaces/common';
import { CardTypeTagComponent } from '../card-type-tag/card-type-tag.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

@Component({
  selector: 'app-card-container',
  imports: [CardTypeTagComponent, FavoriteButtonComponent, RouterModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {
  @Input() cardInfo!: Card;
}
