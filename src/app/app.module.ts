import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ContextRoleService} from "./services/context-role.service";
import {ContextEmailService} from "./services/context-email.service";
import {CheckRoleGuard} from "./guards/check-role/check-role.guard";
import {CheckLoginGuard} from "./guards/check-login/check-login.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ContextRoleService,
    ContextEmailService,
    CheckRoleGuard,
    CheckLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
