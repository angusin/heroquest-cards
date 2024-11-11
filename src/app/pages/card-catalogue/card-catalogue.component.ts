import { Component } from '@angular/core';
import { SidebarSmallComponent, LargeMainContentComponent } from '@components';

import { CardCatalogueSidebarComponent } from './sidebar/sidebar.component';
import { CardCatalogueContentComponent } from './content/content.component';

@Component({
  selector: 'app-card-catalogue',
  standalone: true,
  imports: [
    SidebarSmallComponent,
    LargeMainContentComponent,
    CardCatalogueSidebarComponent,
    CardCatalogueContentComponent,
  ],
  templateUrl: './card-catalogue.component.html',
  styleUrl: './card-catalogue.component.scss',
})
export class CardCatalogueComponent {}
