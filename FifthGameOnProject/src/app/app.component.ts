import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FifthGameOnProject';

  oddnumber:Array<number> = [];
  evenNumber:Array<number> = [];


  SetCount(count:number){
    if(count == 0){
      this.evenNumber = [];
      this.oddnumber = [];
    }else{
    if(count%2 === 0){
      this.evenNumber.push(count)
    }else{
      this.oddnumber.push(count)
    }
  }
  }
}
