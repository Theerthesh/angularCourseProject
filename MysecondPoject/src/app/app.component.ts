import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayPra = false;
   log:any = [];
  onclickPara(){
    this.displayPra = !this.displayPra
    this.log.push(this.log.length+1);
  }
}
