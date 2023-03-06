import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { HomeComponent } from './components/home/home.component';
import { UserServiceModule } from './services/user.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { CompleteProfileComponentModule } from './components/complete-profile/complete-profile.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import {LoginGuard} from "./guards/login/login.guard";
import {CompletedProfileGuard} from "./guards/completed-profile/completed-profile.guard";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'logged-in',
      component: LoggedInComponent,
      canActivate: [LoginGuard, CompletedProfileGuard],
      data: { redirectUrlLogin: '/login', redirectUrlCompleteProfile: '/complete-profile' }
    },
    {
      path: 'complete-profile',
      component: CompleteProfileComponent
    },
    {
      path: '',
      component: HomeComponent
    }
  ]), UserServiceModule, LoginComponentModule, LoggedInComponentModule, CompleteProfileComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
