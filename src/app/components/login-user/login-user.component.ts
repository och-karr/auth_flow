import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-user',
  styleUrls: ['./login-user.component.scss'],
  templateUrl: './login-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginUserComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _userService: UserService, private _router: Router) {}

  onFormSubmitted(form: FormGroup): void {
    this._userService.loginUser({
      data: {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
      },
    })
      .subscribe({
        next: () => {
          // this._router.navigate(['/logged-in'])
        },
        error: () => {
        }
      })
  }
}
