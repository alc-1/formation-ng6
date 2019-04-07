import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Message } from "../models/message.model";

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
        })
      );
  }

  createMessage(message):Observable<any> {
    return this.http.post(this.messagesUrl, message)
      .pipe(
        map(response => {
          const body = response.json();
          return new Message(body.author, body.content);
        })
      );
  }
}
