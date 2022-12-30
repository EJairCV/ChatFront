import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://localhost:3000/api"

  constructor(private http:HttpClient, private router:Router) { }  

  registrarse(user:any){
    return  this.http.post(this.url+"/registro",user)
  }

  iniciar(user:any){
    return this.http.post(this.url+"/log",user)
  }

  desconectar(){
    localStorage.removeItem("token");
    this.router.navigate(["/log"])
  }

  validadToken(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }

  getToken(){
    return localStorage.getItem("token");
  }



}
