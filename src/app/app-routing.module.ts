import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatGlobalComponent } from './chat-global/chat-global.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { PrivateTaskComponent } from './private-task/private-task.component';
import { RegistroComponent } from './registro/registro.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"task",component:TaskComponent},
  {path:"private-task",component:PrivateTaskComponent,canActivate:[AuthGuard]},
  {path:"chat-global",component:ChatGlobalComponent,canActivate:[AuthGuard]},
  {path:"registro",component:RegistroComponent},
  {path:"log",component:LogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
