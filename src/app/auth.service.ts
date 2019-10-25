import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "http://localhost:3000/register"; 
  readonly loginurl = "http://localhost:3000/register/login"; 
  readonly accountUrl= "http://localhost:3000/register/account";

  constructor(private http: HttpClient, private router: Router) { }
  

  register(user){
    return this.http.post<any>(this.url, user)
  }; 

  login(user){
   
    return this.http.post<any>( this.loginurl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  account(user){
    return this.http.post<any>(this.accountUrl, user)
  }

  getAccount(id:string) {
    const url = `${this.url}/${id}`; 
    return this.http.get(url); 
  }

  // this method is for the tokeninterceptor
  getToken(){
    return localStorage.getItem('token'); 
  }
  // this will remove the token and log you out of it.
  logoutUser(){
    localStorage.removeItem('token'); 
    this.router.navigate(['/listings'])
  }

}
