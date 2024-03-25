import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-on',
  templateUrl: './game-on.component.html',
  styleUrl: './game-on.component.css'
})
export class GameOnComponent {
  @Output() Count = new EventEmitter<number>;
Intervalcount :number|any;
  lastcount = 0;

  
  OnstartCount(){
    this.Intervalcount = setInterval(()=>{
      this.Count.emit(this.lastcount+1)
      this.lastcount++;
    },1000)
  }

  OnClearCount(){
    clearInterval(this.Intervalcount);
    this.lastcount=0;
    this.Count.emit(this.lastcount)
  }

  OnpauseCount(){
    clearInterval(this.Intervalcount);
  }
}
