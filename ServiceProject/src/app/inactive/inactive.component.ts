import { Component } from '@angular/core';
import { ProductService } from '../service/prodect-service.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.css'
})
export class InactiveComponent {
  constructor(public service:ProductService){

  }
}
