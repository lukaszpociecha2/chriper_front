import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';


import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService extends DataService{

  localURL = 'http://192.168.0.38:8080/api/auth/validate-email';
  emailExists;

  constructor(http : HttpClient) {
    super("http://192.168.0.38:8080/api/auth/signup", http);
   }

   validateEmail(email){
     console.log(email);
     
     return this.http.get(this.localURL, {
      headers : {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods' : 'GET, POST',
        'Access-Control-Allow-Credentials': 'true'
      }, 
      params : {
         'email' : email
       }
     }).pipe(catchError( ( error : HttpErrorResponse) => {
      return this.handleError(error);
    }));;
   }

}
