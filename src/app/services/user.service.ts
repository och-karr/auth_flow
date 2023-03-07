import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ContextService} from "./context.service";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient, private _contextService: ContextService) {
  }

  loginUser(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(() => {
        this._contextService.set('user');
      })
    );
  }

  loginAdmin(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login-admin', data).pipe(
      tap(() => {
        this._contextService.set('admin');
      })
    );
  }
}
