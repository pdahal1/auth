import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerUserData = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this.authService.register(this.registerUserData).subscribe(
      res => console.log(res), 
      err => console.log(err), 
      
    
    )
    this.router.navigate(['login']);
  }



}
