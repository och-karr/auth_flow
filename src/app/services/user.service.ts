import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private _userAccessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('accessToken'));
  public userAccessToken$: Observable<string | null> = this._userAccessTokenSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(val => {
        this._userAccessTokenSubject.next(data.data.accessToken);
        localStorage.setItem('accessToken', val.data.accessToken);
      })
    );
  }

  completeProfile(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/complete-profile', data);
  }
}
