import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  hasComments = true;
  commentActive = false;
  
  tweets : any;

  constructor() { }

  ngOnInit() {
  }

  toggleComment(){
    this.commentActive=!this.commentActive;
  }

}
