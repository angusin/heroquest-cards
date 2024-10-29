import { Component, InputSignal, Signal, computed, input } from '@angular/core';
import { Card } from '../../core/interfaces/common';
import { heroquestCardsMock } from '../../core/constants/example-cards';
import { NgOptimizedImage } from '@angular/common';
import { CardTypeTagComponent } from '../../components/shared/card-type-tag/card-type-tag.component';
import { FavoriteButtonComponent } from '../../components/shared/favorite-button/favorite-button.component';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [NgOptimizedImage, CardTypeTagComponent, FavoriteButtonComponent],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
})
export class CardDetailComponent {
  cardId: InputSignal<string> = input.required<string>();
  cards = heroquestCardsMock;

  card: Signal<Card> = computed(() => {
    return this.cards.find(card => card.id === +this.cardId()) ?? ({} as Card);
  });
}
