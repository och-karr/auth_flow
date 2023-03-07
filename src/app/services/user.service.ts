import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ContextRoleService} from "./context-role.service";
import {ContextEmailService} from "./context-email.service";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient, private _contextRoleService: ContextRoleService, private _contextEmailService: ContextEmailService) {
  }

  loginUser(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(() => {
        this._contextRoleService.set('user');
        this._contextEmailService.set(data.data.email);
      })
    );
  }

  loginAdmin(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login-admin', data).pipe(
      tap(() => {
        this._contextRoleService.set('admin');
        this._contextEmailService.set(data.data.email);
      })
    );
  }

  logout(): void {
    this._contextRoleService.remove();
    this._contextEmailService.remove();
  }
}
