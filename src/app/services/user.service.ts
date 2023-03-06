import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {AuthDataModel} from "../models/auth-data.model";
import {AuthModel} from "../models/auth.model";
import {LoginModel} from "../models/login.model";
import {ProfileModel} from "../models/profile.model";

@Injectable()
export class UserService {

  private _userAccessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('accessToken'));
  public userAccessToken$: Observable<string | null> = this._userAccessTokenSubject.asObservable();

  private _firstNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('firstName'));
  public firstName$: Observable<string | null> = this._firstNameSubject.asObservable();

  private _lastNameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('lastName'));
  public lastName$: Observable<string | null> = this._lastNameSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(data: AuthModel<AuthDataModel>): Observable<AuthModel<LoginModel>> {
    return this._httpClient.post<AuthModel<LoginModel>>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(val => {
        this._userAccessTokenSubject.next(val.data.accessToken);
        localStorage.setItem('accessToken', val.data.accessToken);
      })
    );
  }

  completeProfile(data: AuthModel<ProfileModel>): Observable<void> {
    return this._httpClient.post<void>('https://us-central1-courses-auth.cloudfunctions.net/auth/complete-profile', data).pipe(
      tap(() => {
        this._firstNameSubject.next(data.data.firstName);
        localStorage.setItem('firstName', data.data.firstName);
        this._lastNameSubject.next(data.data.lastName);
        localStorage.setItem('lastName', data.data.lastName);
      })
    );
  }
}
