import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  router = inject(Router);

  ngOnInit() {
    // We should fix this to load with a single initFlowbite() once Angular 19 is compatible with Flowbite
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        initFlowbite();
      }
    });
  }
}
