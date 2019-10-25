import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EventService } from '../event.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  specialData: String; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder, 
    private eventService: EventService
  ) {
    this.registerForm = this.fb.group({
     // _id: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
       email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
  
    
    this.authService.register(this.registerForm.value).subscribe(res => {
      console.log(res);
      //localStorage.setItem('token', res.token)
      // this.registerForm.reset()
      this.router.navigate(["/login"]);
    });
  }

  ngOnInit() {}

  // ngOnInit() {
  //   this.eventService.getSpecial().subscribe(data =>{
  //     this.specialEvent = data; 
  //   })

  // }
}
