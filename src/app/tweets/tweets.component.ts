import { Component, OnInit } from '@angular/core';
import { TweetService } from '../service/tweet.service';
import { Tweet } from '../tweet';
import { error } from '@angular/compiler/src/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  hasComments = true;
  commentActive = false;
  tweetId : number;
  
  tweets : any[];
  newTweet : Tweet;
  event;

  constructor(private service : TweetService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      response => { map (
        response.body.forEach(element => {
          element.created = new Date(...element.created)
        }))
        
        
        console.log(response.body);
        this.tweets = response.body;
      }
    );

  }

  toggleComment(event, tweet){
    this.commentActive=!this.commentActive;
    this.tweetId = tweet.id;
    console.log('Tweet id = ' + this.tweetId);
    this.event=event;
    console.log(this.event);
    console.log(event);
  }

  addTweet(tweet){
    let tweetToSave = new Tweet();
    tweetToSave.text = tweet.value;
    this.service.create(tweetToSave).subscribe(
      response => {console.log(response)
      this.tweets.push(response)
      },
      error => {console.log(error)}
      
    )
  }
  
  editTweet(editedTweet, originalTweet){
    let originalText = originalTweet.text;
    originalTweet.text = editedTweet.value;
    console.log(editedTweet);
    console.log(originalTweet);
    this.service.update(originalTweet).subscribe(
      response=>{ 
        //response.created = new Date(...response.created)
        response.createdDate = new Date(...response.created)
        console.log(response.createdDate)
      },
      error => {
        originalTweet.text=originalText
        console.log(error);
        alert(error.error.message);
      }
    );

  }

  delete(tweet){
    // console.log('Deleting ' + tweet.id);
    this.service.delete(tweet.id).subscribe();
  }

}
