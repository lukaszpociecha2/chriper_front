import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService extends DataService {

  localUrl : string = 'http://192.168.0.38:8080/tweets/add-comment';

  constructor(http : HttpClient) {
    super('http://192.168.0.38:8080/tweets/add-comment', http);
   }
}
