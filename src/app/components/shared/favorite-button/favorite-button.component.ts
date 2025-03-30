import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-favorite-button',
    imports: [CommonModule],
    templateUrl: './favorite-button.component.html',
    styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {
  @Input() isFavorite!: boolean;
}
