import { Component, OnInit } from '@angular/core';

import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-global',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {

  inputMensaje:string="";

  constructor(public chat:ChatService) { }

  ngOnInit(): void {

    
  }

  public mandarMensaje(){
    console.log(this.inputMensaje)

    let mensaje={
      text:this.inputMensaje
    };

    this.chat.mandarMensaje(mensaje);
    this.inputMensaje="";
  }

}
