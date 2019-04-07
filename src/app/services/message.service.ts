import {Injectable} from '@angular/core';
import {Message} from "../models/message.model";
import {Http} from "@angular/http";
import { Observable, of, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MessageService {

  messagesUrl = 'http://microblog-api.herokuapp.com/api/messages';
  messages:Message[] = [];

  constructor(private http:Http) {}

  getMessages():Observable<Message[]> {
    return this.http.get(this.messagesUrl)
      .pipe(
        map((response) => {
          const body = response.json();
          return body.map((json) => new Message(json.author, json.content))
        }),
        catchError((error) => {
          return error;
        })
      );
  }

  createMessage(message):Observable<any> {
    return this.http.post(this.messagesUrl, message)
      .pipe(
        map(response => {
          const body = response.json();
          return new Message(body.author, body.content);
        }),
        catchError((error) => {
          return error;
        }),
      );
  }
}
