import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-admin',
  styleUrls: ['./login-admin.component.scss'],
  templateUrl: './login-admin.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginAdminComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _userService: UserService, private _router: Router, private cd: ChangeDetectorRef) {}

  onFormSubmitted(form: FormGroup): void {
    this._userService.loginAdmin({
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
            beValidation: err.error.message || 'Non existing admin'
          })
          this.cd.markForCheck()
        }
      })
  }
}
