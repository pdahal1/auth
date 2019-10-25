import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './account/account.component';
import { ActiverouteComponent } from './activeroute/activeroute.component';
import { ListingsComponent } from './listings/listings.component';
import { ActivedetailComponent } from './activedetail/activedetail.component';
import { ViewaccountComponent } from './accountview/viewaccount.component';


const routes: Routes = [
  //{path: '' ,  redirectTo: '/events', pathMatch: 'full'}, 
  {path:'login', component: LoginComponent },
  {path: 'events' , component: EventsComponent, canActivate: [AuthGuard] },
  {path: 'register', component: RegisterComponent },
  {path: 'special' , component: SpecialComponent, canActivate: [AuthGuard]},
  {path: 'account', component:AccountComponent},
  {path: 'viewaccount', component:ViewaccountComponent},
  {path: 'active', component: ActiverouteComponent}, 
  {path: 'activedetail/:id', component: ActivedetailComponent},
  {path: 'listings', component: ListingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
