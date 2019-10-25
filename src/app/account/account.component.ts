import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import { EventService } from "../event.service";
import { ViewaccountComponent } from "../accountview/viewaccount.component";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  public id = "5d83103dc5408118ecf4615b"; 
 public transferred =[]; 
  public dp; 
  constructor(public va: ViewaccountComponent, 
    private router: Router,
    private route: ActivatedRoute, 
    private authService: AuthService) {}

  // check() {
  //   console.log("Mike testing");
  //   console.log(this.id); 
  //   //this.router.navigate(['/viewaccount']);
  // }
  getit(){
    // this.id = this.route.snapshot.paramMap.get("_id");
    // this.authService.getAccount(this.id).subscribe(data =>{
    //   this.dp = data; 
    // })
    console.log(this.va.AccountDetail); 
    //console.log(this.transferred.email); 
  }

  ngOnInit() {
    this.va.AccountDetail= this.transferred;
   
  }
}


