import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoggedInComponent } from './logged-in.component';
import {HasRoleDirective} from "../../directives/has-role/has-role.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    CommonModule
  ],
  declarations: [LoggedInComponent, HasRoleDirective],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
