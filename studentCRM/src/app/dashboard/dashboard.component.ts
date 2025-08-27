import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard.component',
  imports: [Navigation, RouterOutlet],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
