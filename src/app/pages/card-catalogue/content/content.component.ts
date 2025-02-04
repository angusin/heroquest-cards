import { Component } from '@angular/core';
import { CardContainerComponent } from '../../../components/shared/card-container/card-container.component';
import { heroquestCardsMock } from '../../../core/constants/example-cards';

@Component({
  selector: 'app-card-catalogue-content',
  imports: [CardContainerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class CardCatalogueContentComponent {
  cards = heroquestCardsMock;
}
