import { Component, Input } from '@angular/core';
import { Card } from '../../../core/interfaces/common';
import { CardTypeTagComponent } from '../card-type-tag/card-type-tag.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-card-container',
    imports: [CardTypeTagComponent, FavoriteButtonComponent, RouterModule],
    templateUrl: './card-container.component.html',
    styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {
  @Input() cardInfo!: Card;
}
