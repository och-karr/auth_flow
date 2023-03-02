import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { VerifyComponent } from './components/verify/verify.component';
import { RegisterComponentModule } from './components/register/register.component-module';
import { UserServiceModule } from './services/user.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { VerifyComponentModule } from './components/verify/verify.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'register', component: RegisterComponent }, { path: 'login', component: LoginComponent }, { path: 'logged-in', component: LoggedInComponent }, { path: 'verify', component: VerifyComponent }]), RegisterComponentModule, UserServiceModule, LoginComponentModule, LoggedInComponentModule, VerifyComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
