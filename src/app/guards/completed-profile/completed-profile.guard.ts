import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { UserService } from "../../services/user.service";

@Injectable()
export class CompletedProfileGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return combineLatest([
      this._userService.firstName$,
      this._userService.lastName$
    ]).pipe(
      map(([firstName, lastName]) => {
        return firstName && lastName ? true : this._router.parseUrl(activatedRoute.data['redirectUrlCompleteProfile']);
      })
    )
  }
}
