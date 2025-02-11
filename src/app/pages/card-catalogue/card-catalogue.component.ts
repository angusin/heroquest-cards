import { Component } from '@angular/core';
import { CardCatalogueContentComponent } from './content/content.component';
import { CardCatalogueTopFiltersComponent } from './top-filters/top-filters.component';

@Component({
    selector: 'app-card-catalogue',
    imports: [CardCatalogueContentComponent, CardCatalogueTopFiltersComponent],
    templateUrl: './card-catalogue.component.html',
    styleUrl: './card-catalogue.component.scss'
})
export class CardCatalogueComponent {}
