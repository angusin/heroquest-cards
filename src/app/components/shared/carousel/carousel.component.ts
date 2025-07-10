import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../../core/interfaces/common';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule, CardContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @Input() cards: Card[] = [];
  @Input() title = 'Featured Cards';

  scrollLeft(): void {
    const container = document.querySelector('.carousel-container');
    if (container) {
      container.scrollBy({ left: -296, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    const container = document.querySelector('.carousel-container');
    if (container) {
      container.scrollBy({ left: 296, behavior: 'smooth' });
    }
  }
}
