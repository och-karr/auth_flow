import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ContextEmailService {
  private _emailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('email'));

  get(): Observable<string | null> {
    return this._emailSubject.asObservable();
  }

  set(email: string): void {
    localStorage.setItem('email', email)
    this._emailSubject.next(email);
  }
}
