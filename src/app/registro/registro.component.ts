import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  user ={
    email:"",
    password:""
  }

  token:any;
  ngOnInit(): void {
  }

  registrar(){

    this.auth.registrarse(this.user).subscribe(
      res=>{
        
        this.token=res;
        localStorage.setItem("token",this.token.token)
        this.router.navigate(["/private-task"])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
