import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../../core/interfaces/common';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule, CardContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  @Input() cards: Card[] = [];
  @Input() title = 'Featured Cards';

  currentSlide = 0;
  maxSlide = 0;
  visibleCards = 1; // Default to 1, will be updated based on screen size

  ngOnInit(): void {
    this.calculateMaxSlide();
  }

  ngAfterViewInit(): void {
    // Calculate visible cards after view is initialized
    this.calculateVisibleCards();
    this.calculateMaxSlide();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateVisibleCards();
    this.calculateMaxSlide();
  }

  nextSlide(): void {
    if (this.carouselTrack && this.currentSlide < this.maxSlide) {
      this.currentSlide++;
      this.scrollToCurrentSlide(true);
    }
  }

  prevSlide(): void {
    if (this.carouselTrack && this.currentSlide > 0) {
      this.currentSlide--;
      this.scrollToCurrentSlide(true);
    }
  }

  private calculateVisibleCards(): void {
    if (!this.carouselTrack?.nativeElement) return;

    const screenWidth = window.innerWidth;

    // Determine visible cards based on screen width
    // These values should match the responsive classes in the template
    if (screenWidth >= 1280) {
      // xl breakpoint
      this.visibleCards = 5; // xl:w-1/5
    } else if (screenWidth >= 1024) {
      // lg breakpoint
      this.visibleCards = 4; // lg:w-1/4
    } else if (screenWidth >= 768) {
      // md breakpoint
      this.visibleCards = 3; // md:w-1/3
    } else if (screenWidth >= 640) {
      // sm breakpoint
      this.visibleCards = 2; // sm:w-1/2
    } else {
      this.visibleCards = 1; // Default for mobile (actually showing 1.15 cards)
    }
  }

  private calculateMaxSlide(): void {
    // Maximum slide is the total number of cards minus the number of visible cards
    this.maxSlide = Math.max(0, this.cards.length - this.visibleCards);
  }

  private scrollToCurrentSlide(animate = false): void {
    if (!this.carouselTrack?.nativeElement) return;

    const container = this.carouselTrack.nativeElement;
    const cards = container.children;
    if (this.currentSlide < cards.length) {
      const card = cards[this.currentSlide];
      const scrollTarget = card.offsetLeft - container.parentElement.offsetLeft;

      if (animate) {
        container.parentElement.scrollTo({
          left: scrollTarget,
          behavior: 'smooth',
        });
      } else {
        container.parentElement.scrollLeft = scrollTarget;
      }
    }
  }
}
