import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FourthPrgInputOuput';
  Servers :any = [];

 OnServerCreated(serverData :{type:string,name:string,description:string}){
this.Servers.push(serverData);
 }
}
