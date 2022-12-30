import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

validar:boolean=false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.validar=this.auth.validadToken();
  }

  desconectar(){
    this.auth.desconectar();
  }

}
