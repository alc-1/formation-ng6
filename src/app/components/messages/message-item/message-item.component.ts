import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() { }

}
