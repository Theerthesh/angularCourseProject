import { Component } from '@angular/core';
import { ProductService } from './service/prodect-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ProductService]
})
export class AppComponent {
  title = 'ServiceProject';
}
