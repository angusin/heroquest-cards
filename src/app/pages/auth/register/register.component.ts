import { Component } from '@angular/core';
import { CheckboxComponent } from '../../../components/shared/checkbox/checkbox.component';
import { InputFieldComponent } from '../../../components/shared/input-field/input-field.component';
import { SocialButtonComponent } from '../../../components/shared/social-button/social-button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CheckboxComponent, InputFieldComponent, SocialButtonComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
