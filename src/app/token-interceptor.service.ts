import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'
import { AuthService } from './auth.service';
//injecting the auth service for token is slightly different we do not follow the conventioal way of dependency injection for this
  

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req, next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

  constructor(  private injector: Injector) { }
}
