import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private service : MessageServiceService) { }

  ngOnInit() {

    this.service.getAll().subscribe(
      response => console.log(response)
    );
  }



}
