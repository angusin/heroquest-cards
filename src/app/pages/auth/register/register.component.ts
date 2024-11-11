import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
