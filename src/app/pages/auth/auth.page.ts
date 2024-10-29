import { Component, input, InputSignal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './auth.page.html',
})
export default class AuthPageComponent {
  // This is de param from url catching with a
  // Is an InputSignal and to detect change is neccesary import in app.config.ts the withComponentInputBinding()
  formType: InputSignal<string> = input.required<string>();
}
