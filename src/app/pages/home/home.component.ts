import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from '../../core/interfaces/common';
import { heroquestCardsMock } from '../../core/constants/example-cards';
import { CardContainerComponent } from '../../components/shared/card-container/card-container.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, CardContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  heroquestCardsMock: Card[] = heroquestCardsMock;
  currentSlide = 0;
  maxSlide = this.heroquestCardsMock.length - 5; // Show 5 cards at a time
  translateX = 0;

  ngAfterViewInit(): void {
    this.updateCarouselPosition();
  }

  nextSlide(): void {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
      this.updateCarouselPosition();
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateCarouselPosition();
    }
  }

  private updateCarouselPosition(): void {
    // Calculate the width of a single card item (20% of container width)
    const cardWidth = this.carouselTrack?.nativeElement.clientWidth * 0.2;
    this.translateX = -this.currentSlide * cardWidth;
  }
}
