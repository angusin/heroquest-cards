import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card } from '../../core/interfaces/common';
import { ActivatedRoute } from '@angular/router';
import { heroquestCardsMock } from '../../core/constants/example-cards';
import { NgOptimizedImage } from '@angular/common';
import { CardTypeTagComponent } from '../../components/shared/card-type-tag/card-type-tag.component';
import { FavoriteButtonComponent } from '../../components/shared/favorite-button/favorite-button.component';
import { ButtonComponent } from '../../components/shared/button/button.component';

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

  constructor(private route: ActivatedRoute) {}

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
