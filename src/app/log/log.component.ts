import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  user={
    email:"",
    password:""
  };
  token:any;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  public iniciar(){
    this.auth.iniciar(this.user).subscribe(
      res=>{
        console.log(res)
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
