import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentActive;
  @Input() tweetId : number;
  comment : Comment;

  constructor(private service : CommentService ) { }

  ngOnInit() {
    
  }

  sendComment(input){
    // this.comment = input;
    // console.log(this.comment,this.tweetId);
    let comment = new Comment();
    comment.text=input;
    comment.tweetId=this.tweetId;
     this.service.create(comment).subscribe(
       response=>console.log(response)
     );
  }







}
