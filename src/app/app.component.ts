import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from './core/services/flowbite.service';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    initFlowbite();
  }
}
