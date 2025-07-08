import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { CardTypeTagComponent } from '../../components/shared/card-type-tag/card-type-tag.component';
import { FavoriteButtonComponent } from '../../components/shared/favorite-button/favorite-button.component';
import { heroquestCardsMock } from '../../core/constants/example-cards';
import { Card } from '../../core/interfaces/common';

@Component({
  selector: 'app-card-detail',
  imports: [
    NgOptimizedImage,
    CardTypeTagComponent,
    FavoriteButtonComponent,
    ButtonComponent,
  ],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailComponent implements OnInit {
  cards = heroquestCardsMock;
  card!: Card;

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cardId = params['id'];
      if (cardId) {
        const foundCard = this.getCard(+cardId);
        if (foundCard) {
          this.card = foundCard;
        } else {
          console.log(`Card with id ${cardId} not found`);
        }
      }
    });
  }

  getCard(cardId: number): Card | undefined {
    return this.cards.find(card => card.id === cardId);
  }
}
