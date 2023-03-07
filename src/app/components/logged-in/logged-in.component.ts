import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextEmailService } from '../../services/context-email.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
  readonly email$: Observable<string | null> = this._contextEmailService.get();

  constructor(private _contextEmailService: ContextEmailService) {
  }
}
