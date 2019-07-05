import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
//import "rxjs/add/operator/map";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends DataService {

  localUrl : string = 'http://192.168.0.38:8080/api/auth/signin';

  constructor(http : HttpClient) {
    super('http://192.168.0.38:8080/api/auth/signin', http);
   }

   signInWithServer(credentials){
      return this.http.post(this.localUrl, credentials).pipe(map(
        response=> {
          console.log(response);
          console.log(response.accessToken);
          console.log(response.tokenType);
          console.log(response.value);
          let token : string = response.tokenType + ' ' + response.accessToken;
          if(response.accessToken){
            localStorage.setItem("token", token);
          }
          
          
        }
      ));


   }

}
