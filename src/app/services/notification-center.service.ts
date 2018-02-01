import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rx-js.extensions';

import { Notification } from '../models/notification.interface';

@Injectable()
export class NotificationCenterService {

  private _serviceUrl = 'http://localhost:3000/notifications';  // URL to web api

  constructor(private http: Http) { }

  getNotifications(): Observable<Notification[]> {
    const url = this._serviceUrl;
    return this.http.get(url)
                .map(res => res.json());
  }
}
