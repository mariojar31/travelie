import { Component } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false
})

export class SidebarComponent {
  collapsed:boolean=false;
  sections=[
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Packages', icon: 'flight_takeoff', route: '/packages' },
    { name: 'Bookings', icon: 'book', route: '/boockings' },
    { name: 'Calendar', icon: 'event', route: '/calendar' },
    { name: 'Travelers', icon: 'backpack', route: '/travelers' },
    { name: 'Guides', icon: 'explore', route: '/calendar' },
    { name: 'Gallery', icon: 'image', route: '/gallery' },
    { name: 'Messages', icon: 'chat', route: '/messages' },
    { name: 'Deals', icon: 'shoppingmode', route: '/deals' },
    { name: 'Feedbacks', icon: 'thumb_up', route: '/feedbacks' },
  ];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.collapsed$.subscribe(collapsed => {
      this.collapsed = collapsed;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
