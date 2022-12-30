import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chat:Array<{text:string}>=[]

  constructor(private socket:SocketService) {
    this.recibirMensaje();
   }

  mandarMensaje(MensajeObj:any){
    
    this.chat.unshift(MensajeObj);
    this.socket.io.emit("cliente-mensaje",MensajeObj);
  }

  recibirMensaje(){
    this.socket.io.on("servidor-mensaje",(MensajeObj)=>{
      this.chat.unshift(MensajeObj);
    })
  }

}
