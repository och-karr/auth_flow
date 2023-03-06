import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {LoginModel} from "../models/login.model";
import {AuthDataModel} from "../models/auth-data.model";
import {AuthModel} from "../models/auth.model";

@Injectable()
export class UserService {
  private _emailVerifiedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('emailVerified') === 'true');
  public emailVerified$: Observable<boolean> = this._emailVerifiedSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(data: AuthModel<AuthDataModel>): Observable<AuthModel<LoginModel>> {
    return this._httpClient.post<AuthModel<LoginModel>>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap((val: AuthModel<LoginModel>) => {
        localStorage.setItem('accessToken', val.data.accessToken);
        localStorage.setItem('emailVerified', val.data.emailVerified.toString());
      })
    );
  }

  register(data: AuthModel<AuthDataModel>): Observable<AuthModel<LoginModel>> {
    return this._httpClient.post<AuthModel<LoginModel>>('https://us-central1-courses-auth.cloudfunctions.net/auth/register2', data);
  }
}
