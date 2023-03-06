import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, switchMap, take} from 'rxjs';
import {UserService} from "./services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this._userService.userAccessToken$.pipe(
      take(1),
      switchMap((token: string | null) => {
        const updatedRequest: HttpRequest<any> = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })

        return next.handle(updatedRequest);
      })
    )
  }
}
