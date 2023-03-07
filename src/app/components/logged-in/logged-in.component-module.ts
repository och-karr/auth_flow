import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoggedInComponent } from './logged-in.component';
import {HasRoleDirective} from "../../directives/has-role/has-role.directive";

@NgModule({
    imports: [
        MatCardModule
    ],
  declarations: [LoggedInComponent, HasRoleDirective],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
