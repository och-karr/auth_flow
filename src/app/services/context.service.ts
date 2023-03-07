import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ContextService {
  private _roleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('role'));

  get(): Observable<string | null> {
    return this._roleSubject.asObservable();
  }

  set(role: string): void {
    localStorage.setItem('role', role)
    this._roleSubject.next(role);
  }
}
