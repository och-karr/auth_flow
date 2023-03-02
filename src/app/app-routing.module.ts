import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterComponentModule } from './components/register/register.component-module';
import { UserServiceModule } from './services/user.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'register', component: RegisterComponent }]), RegisterComponentModule, UserServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
