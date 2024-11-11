import { Component, OnInit } from '@angular/core';

import { CardCatalogueComponent } from './pages/card-catalogue/card-catalogue.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@components';
import { FlowbiteService } from '@core/services/flowbite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CardCatalogueComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(() => {
      //console.log('Flowbite loaded', flowbite);
    });
  }
}
