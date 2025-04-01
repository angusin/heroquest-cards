import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  heroquestCardsMock: Card[] = heroquestCardsMock;
  currentSlide = 0;
  maxSlide = 0;

  ngOnInit(): void {
    this.maxSlide = this.heroquestCardsMock.length - 1;
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
