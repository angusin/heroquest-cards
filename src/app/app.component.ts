import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CardCatalogueComponent } from './pages/card-catalogue/card-catalogue.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

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
  constructor(private router: Router) {}

  ngOnInit() {
    // We should fix this to load with a single initFlowbite() once Angular 19 is compatible with Flowbite
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        initFlowbite();
      }
    });
  }
}
