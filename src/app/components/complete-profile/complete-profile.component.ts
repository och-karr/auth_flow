import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-complete-profile',
  styleUrls: ['./complete-profile.component.scss'],
  templateUrl: './complete-profile.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompleteProfileComponent {
  readonly form: FormGroup = new FormGroup({
    firstName: new FormControl('' ),
    lastName: new FormControl(''),
  });

  constructor(private _userService: UserService, private _router: Router) {}

  onFormSubmitted(form: FormGroup): void {
    this._userService.completeProfile({
      data: {
        firstName: form.get('firstName')?.value,
        lastName: form.get('lastName')?.value,
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
