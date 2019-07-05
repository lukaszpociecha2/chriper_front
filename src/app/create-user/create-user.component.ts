import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MockService } from '../service/mock.service';
import {FormGroup, FormControl} from '@angular/forms'
import { CreateUserService } from '../service/create-user.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
      private service : CreateUserService
    ) { }

  pass : string;
  pass_repeat : string;
  emailAlreadyExists = false;

  form = new FormGroup({
    'firstName' : new FormControl(),
    'lastName' : new FormControl(),
    'email' : new FormControl(),
    'password' : new FormControl(),
    'password2' : new FormControl()
  });

  ngOnInit() {
  }

  submitUser(f){
      //f.errors.alreadyExists = true; powinno wyswietlic alert, wyczyscic formularz
      console.log(f.value);
      this.service.create(f.value).subscribe(); // TODO przechwycic wyjatek / error 
    }
  

  pass1(pass){ this.pass=pass.value }
  pass2(pass){ this.pass_repeat=pass.value }
  
  checkEmail(email){
    // hardcoded simulates email exists
    // if (email==='lukasz@pociecha.com') {
    //   this.emailAlreadyExists = true;
    // } else this.emailAlreadyExists = false;
    this.service.validateEmail(email).subscribe(response => {
      this.emailAlreadyExists=<boolean>response;
      console.log('Email exists:' + this.emailAlreadyExists);
    }, error=>{alert(error)});
    
  }

}
