import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInService } from '../service/sign-in.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : SignInService) { }

  signUpForm = new FormGroup({
    'email' : new FormControl('', [
                      Validators.email, 
                      Validators.required
                    ]),

    'password' : new FormControl('', Validators.required)
  })

  signup(){
    this.service.signInWithServer(this.signUpForm.value).subscribe(
      response => {
        console.log(response);
        //localStorage.setItem('response', response);
      }, 
      error => {
      console.log(error);
    })
  }

  

  ngOnInit() {
  }

}
