import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-num',
  templateUrl: './even-num.component.html',
  styleUrl: './even-num.component.css'
})
export class EvenNumComponent {
  @Input() Number:number | undefined;
}
