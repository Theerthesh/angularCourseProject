import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrl: './server-input.component.css'
})
export class ServerInputComponent {
name :string='';
description:string ='';
@Output()ServerInput =new EventEmitter<{type:string,name:string,description:string}>();


OnCreate(){
this.ServerInput.emit({type:"normal",name:this.name,description:this.description});
this.name = '';
this.description = ''
}



Onblue(){
  this.ServerInput.emit({type:"blue",name:this.name,description:this.description});
  this.name = '';
this.description = ''
}
}
