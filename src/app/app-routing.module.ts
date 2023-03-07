import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginAdminComponentModule } from './components/login-admin/login-admin.component-module';
import { UserServiceModule } from './services/user.service-module';
import { LoginUserComponentModule } from './components/login-user/login-user.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { AdminComponentModule } from './components/admin/admin.component-module';
import {CheckRoleGuard} from "./guards/check-role/check-role.guard";
import {LoginComponent} from "./components/login/login.component";
import {LoginComponentModule} from "./components/login/login.component-module";
import {CheckLoginGuard} from "./guards/check-login/check-login.guard";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'login-admin',
      component: LoginAdminComponent
    },
    {
      path: 'login-user',
      component: LoginUserComponent
    },
    {
      path: 'logged-in',
      component: LoggedInComponent,
      canActivate: [CheckLoginGuard],
      data: { redirectUrlLogin: '/login' }
    },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [CheckLoginGuard, CheckRoleGuard],
      data: { expectedRole: 'admin', redirectUrlRole: '/logged-in', redirectUrlLogin: '/login' }
    }
  ]), LoginComponentModule, LoginAdminComponentModule, UserServiceModule, LoginUserComponentModule, HomeComponentModule, LoggedInComponentModule, AdminComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
