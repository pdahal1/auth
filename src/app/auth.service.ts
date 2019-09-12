import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "http://localhost:3000/register"; 
  readonly loginurl = "http://localhost:3000/register/login"; 

  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post<any>(this.url, user)
  }; 

  login(user){
   
    return this.http.post<any>( this.loginurl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
