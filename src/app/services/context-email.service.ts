import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {STORAGE} from "./storage";

@Injectable()
export class ContextEmailService {
  private _emailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('email'));

  constructor(@Inject(STORAGE) private _storage: Storage) {}

  get(): Observable<string | null> {
    return this._emailSubject.asObservable();
  }

  set(email: string): void {
    this._storage.setItem('email', email)
    this._emailSubject.next(email);
  }

  remove(): void {
    this._storage.removeItem('email')
    this._emailSubject.next('');
  }
}
