import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

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

  constructor(private _userService: UserService, private _router: Router, private cd: ChangeDetectorRef) {}

  onFormSubmitted(form: FormGroup): void {
    this._userService.loginUser({
      data: {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
      },
    })
      .subscribe({
        next: () => {
          this._router.navigate(['/logged-in'])
        },
        error: (err: HttpErrorResponse) => {
          this.form.setErrors({
            beValidation: err.error.message || 'Non existing user'
          })
          this.cd.markForCheck()
        }
      })
  }
}
