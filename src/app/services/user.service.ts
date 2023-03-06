import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', data).pipe(
      tap(val => {
        localStorage.setItem('accessToken', val.data.accessToken);
      })
    );
  }
}
