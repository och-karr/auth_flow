import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {ContextRoleService} from "../../services/context-role.service";

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(private _contextRoleService: ContextRoleService, private _router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._contextRoleService.get().pipe(
      map((role) => {
        return role !== null ? true : this._router.parseUrl(activatedRoute.data['redirectUrlLogin'])
      })
    );
  }
}
