import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Observable string sources
  private notificationOption = new Subject<string>();

  // Observable string streams
  notificationOption$ = this.notificationOption.asObservable();

  constructor() {}

  showNotification(option: any) {
    this.notificationOption.next(option);
  }
}
