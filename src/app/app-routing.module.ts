import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginAdminComponentModule } from './components/login-admin/login-admin.component-module';
import { UserServiceModule } from './services/user.service-module';
import { LoginUserComponentModule } from './components/login-user/login-user.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login-admin', component: LoginAdminComponent },
    { path: 'login-user', component: LoginUserComponent },
    { path: '', component: HomeComponent },
    { path: 'logged-in', component: LoggedInComponent }
  ]), LoginAdminComponentModule, UserServiceModule, LoginUserComponentModule, HomeComponentModule, LoggedInComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
