import { Component } from '@angular/core';
import { CardContainerComponent } from '../../../components/shared/card-container/card-container.component';

@Component({
  selector: 'app-card-catalogue-content',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class CardCatalogueContentComponent {}
