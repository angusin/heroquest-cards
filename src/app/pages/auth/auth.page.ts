import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './auth.page.html',
})
export default class AuthPageComponent {
  action: 'login' | 'register' = 'register';
  constructor(private route: ActivatedRoute) {
    this.action = this.route.snapshot.params['action'];
  }
}
