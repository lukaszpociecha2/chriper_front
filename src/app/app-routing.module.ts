import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { TweetsComponent } from './tweets/tweets.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path : '', redirectTo : '/sign-in', pathMatch : 'full'},
  { path : 'sign-in', component : LoginComponent },
  { path : 'sign-up', component : CreateUserComponent },
  { path : 'chirps', component : TweetsComponent },
  { path : 'messages', component : MessagesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
