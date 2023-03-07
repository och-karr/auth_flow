import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    RouterLink,
    MatButtonModule
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: [LoginComponent]
})
export class LoginComponentModule {
}
