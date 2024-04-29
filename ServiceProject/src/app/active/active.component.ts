import { Component } from '@angular/core';
import { ProductService } from '../service/prodect-service.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent {

constructor(public service:ProductService){
console.log(service.activeUser);

}
}
