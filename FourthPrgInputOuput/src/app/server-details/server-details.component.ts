import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrl: './server-details.component.css'
})
export class ServerDetailsComponent {
  @Input() sdServer: { type: string; name: string; description: string; } | any;
}
