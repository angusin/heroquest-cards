import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-type-tag',
    imports: [CommonModule],
    templateUrl: './card-type-tag.component.html',
    styleUrl: './card-type-tag.component.scss'
})
export class CardTypeTagComponent {
  @Input() text!: string;

  getColorClass(): string {
    switch (this.text.toLowerCase()) {
      case 'monster':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'treasure':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hero':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'artifact':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'spell':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  }
}
