import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  //{path: '' ,  redirectTo: '/events', pathMatch: 'full'}, 
  {path:'login', component: LoginComponent },
  {path: 'events' , component: EventsComponent, canActivate: [AuthGuard] },
  {path: 'register', component: RegisterComponent },
  {path: 'special' , component: SpecialComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
