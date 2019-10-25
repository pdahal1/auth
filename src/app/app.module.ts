import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EventService } from './event.service';
import { AccountComponent } from './account/account.component';

import { ActiverouteComponent } from './activeroute/activeroute.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ListingsComponent } from './listings/listings.component';
import { ActivedetailComponent } from './activedetail/activedetail.component';
import { ViewaccountComponent } from './accountview/viewaccount.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,
    AccountComponent,
   
    ActiverouteComponent,
    ListingsComponent,
    ActivedetailComponent,
    ViewaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatChipsModule, 
    MatCardModule, 

  ],
  providers: [AuthService, EventService, AuthService,AccountComponent, ViewaccountComponent,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptorService, 
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
