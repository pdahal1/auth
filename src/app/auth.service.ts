import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "http://localhost:3000/register"; 

  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post<any>(this.url, user)
  }; 

  login(user){
    const _url= `{this.url}/{login}`;
    return this.http.post<any>( _url, user)
  }

}
