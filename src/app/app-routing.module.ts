import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponentModule } from './components/login-admin/login-admin.component-module';
import { UserServiceModule } from './services/user.service-module';
import { LoginUserComponentModule } from './components/login-user/login-user.component-module';
import { HomeComponentModule } from './components/home/home.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login-admin',
      component: LoginAdminComponent
    },
    {
      path: 'login-user',
      component: LoginUserComponent
    },
    {
      path: '',
      component: HomeComponent
    }
  ]), LoginAdminComponentModule, UserServiceModule, LoginUserComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
