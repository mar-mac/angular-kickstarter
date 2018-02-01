import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rx-js.extensions';

import { Message } from '../models/message.interface';

@Injectable()
export class MessageCenterService {

  private _serviceUrl = 'http://localhost:3000/messages';  // URL to web api

  constructor(private http: Http) { }

  getMessages(): Observable<Message[]> {
    const url = this._serviceUrl;
    return this.http.get(url)
      .map(res => res.json());
  }

}
