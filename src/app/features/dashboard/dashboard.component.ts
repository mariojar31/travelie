import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  metrics = [
    { value: '1,250', label: 'Total Bookings', percentage: '+12%' },
    { value: '320', label: 'Total New Customers', percentage: '-5%' },
    { value: '$18,500', label: 'Total Earnings', percentage: '+8%' }
  ];
}
