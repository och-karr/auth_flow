import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _userService: UserService, private _router: Router) {}

  onFormSubmitted(form: FormGroup): void {
    this._userService.login({
      data: {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
      },
    })
      .subscribe({
        next: () => {
          this._router.navigate(['/logged-in'])
        },
        error: () => {
        }
      })
  }
}
