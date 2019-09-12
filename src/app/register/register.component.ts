import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public registerForm: FormGroup; 
  
  constructor(private authService: AuthService, private router: Router , private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.authService.register(this.registerForm.value).
    subscribe(res=>{
      console.log(res) 
       localStorage.setItem('token', res.token)
      // this.registerForm.reset()
      this.router.navigate(['/login'])
    }); 
  }

  ngOnInit() {
    // this.registerForm = this.fb.group({
       
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }
 
}

// mongoose.connect('mongodb://localhost:27017/authentication', (err) => {
//     if (!err) {
//         console.log('connected successfully');
//     } else {
//         console.log('cannot connect to the database' + JSON.stringify(err, undefined, 2));
//     }
// });
