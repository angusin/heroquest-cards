import { Component } from '@angular/core';
import { CardContainerComponent } from '@components';

import { heroquestCardsMock } from '@core/constants/example-cards';
import { Card } from '@core/interfaces/common';

@Component({
  selector: 'app-card-catalogue-content',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class CardCatalogueContentComponent {
  cards: Card[] = heroquestCardsMock;
}
