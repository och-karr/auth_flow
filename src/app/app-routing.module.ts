import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UserServiceModule} from './services/user.service-module';
import {LoginComponentModule} from './components/login/login.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    }
  ]), UserServiceModule, LoginComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
