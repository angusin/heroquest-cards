import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Card } from '../../core/interfaces/common';
import { heroquestCardsMock } from '../../core/constants/example-cards';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { CarouselComponent } from '../../components/shared/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule, ButtonComponent, CarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private router = inject(Router);

  heroquestCardsMock: Card[] = heroquestCardsMock;

  navigateToCatalogue = () => {
    this.router.navigate(['/catalogue']);
  };

  navigateToBuilder = () => {
    this.router.navigate(['/builder']);
  };
}
