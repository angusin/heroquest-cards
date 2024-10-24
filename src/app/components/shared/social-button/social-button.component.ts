import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent {
  @Input() provider!: string;
  @Input() iconUrl!: string;
}
