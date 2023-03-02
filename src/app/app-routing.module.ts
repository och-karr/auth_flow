import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponentModule } from './components/register/register.component-module';
import { UserServiceModule } from './services/user.service-module';
import { LoginComponentModule } from './components/login/login.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'register', component: RegisterComponent }, { path: 'login', component: LoginComponent }]), RegisterComponentModule, UserServiceModule, LoginComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
