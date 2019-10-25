import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountComponent } from "../account/account.component";
import { EventService } from "../event.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
//import { ActiverouteComponent } from '../activeroute/activeroute.component';

@Component({
  selector: "app-viewaccount",
  templateUrl: "./viewaccount.component.html",
  styleUrls: ["./viewaccount.component.css"]
})
export class ViewaccountComponent implements OnInit {
  public AccountDetail = [];
  show = false;
  public viewAccountform: FormGroup;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    
  }

  onSubmit() {
    this.authService.account(this.viewAccountform.value).subscribe(data => {
      this.AccountDetail = data;
      console.log(this.AccountDetail);
      this.router.navigate(["/account"]);

    });
  }

  check() {
    console.log("thorough checking");
  }
  shows() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.viewAccountform = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
}
