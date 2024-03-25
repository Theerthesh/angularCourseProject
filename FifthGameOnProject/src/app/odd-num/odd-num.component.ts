import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-num',
  templateUrl: './odd-num.component.html',
  styleUrl: './odd-num.component.css'
})
export class OddNumComponent {
  @Input() Number:number | undefined;
}
