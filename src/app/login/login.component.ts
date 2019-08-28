import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData ={}; 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    this.authService.login(this.loginData).subscribe(
      res => console.log(res), 
      err => console.log(err), 
    )
    this.router.navigate(['special']);
  }

}
