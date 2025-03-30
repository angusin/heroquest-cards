import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-about',
  standalone: true,
  templateUrl: './info-about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoAboutComponent {}
