import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  private _url = "http://localhost:3000/register";
  private getAccountUrl = "http://localhost:3000/register/account";
  readonly loginurl = "http://localhost:3000/register/login";
  readonly entryUrl = "http://localhost:3000/register/entries";

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this._url);
  }

  getSpecial() {
    return this.http.get<any>(this._url);
  }

  getAccount(user) {
    return this.http.get<any>(this.getAccountUrl, user);
  }

  accountLogin(user) {
    return this.http.post<any>(this.loginurl, user);
  }

  makeEntries(user){
    return this.http.post<any>(this.entryUrl, user);
  }

  
}
