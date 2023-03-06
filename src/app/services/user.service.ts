import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private _emailVerifiedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('emailVerified') === 'true');
  public emailVerified$: Observable<boolean> = this._emailVerifiedSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(val => {
        localStorage.setItem('accessToken', val.data.accessToken);
        localStorage.setItem('emailVerified', val.data.emailVerified);
      })
    );
  }

  register(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/register2', data);
  }
}
