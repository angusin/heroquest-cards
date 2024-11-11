import { Component, InputSignal, Signal, computed, input } from '@angular/core';
import { Card } from '@core/interfaces/common';
import { heroquestCardsMock } from '@core/constants/example-cards';
import { NgOptimizedImage } from '@angular/common';
import { FavoriteButtonComponent, CardTypeTagComponent } from '@components';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [NgOptimizedImage, CardTypeTagComponent, FavoriteButtonComponent],
  templateUrl: './card-detail.page.html',
  styleUrl: './card-detail.page.scss',
})
export default class CardDetailPage {
  cardId: InputSignal<string> = input.required<string>();
  cards = heroquestCardsMock;

  card: Signal<Card> = computed(() => {
    return this.cards.find(card => card.id === +this.cardId()) ?? ({} as Card);
  });
}
