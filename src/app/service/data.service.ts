import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods' : 'POST',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
   
  constructor(private url : string, public http : HttpClient) { }

  getAll(){
    return this.http.get<any>(this.url, {
      // headers: new HttpHeaders({ 
      //   'Access-Control-Allow-Origin':'*',
      //   'Access-Control-Allow-Methods' : 'POST',
      //   'Access-Control-Allow-Credentials': 'true'
      // }),
      observe: "response",
      responseType: "json"
    }).pipe(catchError((error : HttpErrorResponse) => {
          return this.handleError(error);
    }));
  }

  update(resource){
    //return this.http.put(this.url + '/' + post.id, JSON.stringify(post));// update całego obiektu
    return this.http.patch(this.url + '/' + resource.id
    , resource, {headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods' : 'POST',
      'Access-Control-Allow-Credentials': 'true'
    })}); 
  }

  create(resource){
    console.log(resource);    
    return this.http.post(this.url, resource
          , { headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods' : 'OPTIONS, POST, GET',
          'Access-Control-Allow-Credentials': 'true'
        })}).pipe(catchError( (error : HttpErrorResponse) => {
          return this.handleError(error);     
        }));
    }

  delete(id){
        
        return this.http.delete(this.url + '/' + id, {headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods' : 'POST',
          'Access-Control-Allow-Credentials': 'true'
        }),})
                .pipe(catchError( ( error : HttpErrorResponse) => {
                  return this.handleError(error);
                }));
            }
  

  handleError(error : HttpErrorResponse){
    if (error.status === 404){
        return throwError(new NotFoundError(error));
    } else if(error.status === 400){  
        return throwError(new BadInputError(error));
    } else {
        return throwError(new AppError(error));
    }
  }
}
