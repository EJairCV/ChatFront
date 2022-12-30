import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private auth:AuthService) { }

intercept(req:any,next:any){
  const tokenizereq = req.clone({
    setHeaders:{
      Autorization: `Bearer ${this.auth.getToken()}`
    }
  })
  return next.handle(tokenizereq);

}


}


