import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _collapsedSubject = new BehaviorSubject<boolean>(false);
  public collapsed$ = this._collapsedSubject.asObservable();
  
  public toggleSidebar(): void {
    this._collapsedSubject.next(!this._collapsedSubject.value);
  }

  public setCollapsed(collapsed: boolean):void {
    this._collapsedSubject.next(collapsed);
  }

}
