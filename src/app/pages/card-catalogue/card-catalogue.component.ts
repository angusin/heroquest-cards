import { Component } from '@angular/core';
import { SidebarSmallComponent } from '../../components/layout/small-sidebar/sidebar-small.component';
import { LargeMainContentComponent } from '../../components/layout/large-main-content/large-main-content.component';
import { CardCatalogueSidebarComponent } from './sidebar/sidebar.component';
import { CardCatalogueContentComponent } from './content/content.component';

@Component({
  selector: 'app-card-catalogue',
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
