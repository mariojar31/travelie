import { Component } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false
})

export class SidebarComponent {
  isCollapsed:boolean=false;
  isMobile:boolean=false;

  // Datos de las secciones del sidebar
  sections = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Packages', icon: 'flight_takeoff', route: '/packages' },
    { name: 'Bookings', icon: 'book', route: '/bookings' },
    { name: 'Calendar', icon: 'event', route: '/calendar' },
    { name: 'Travelers', icon: 'backpack', route: '/travelers' },
    { name: 'Guides', icon: 'explore', route: '/guides' },
    { name: 'Gallery', icon: 'image', route: '/gallery' },
    { name: 'Messages', icon: 'chat', route: '/messages' },
    { name: 'Deals', icon: 'shoppingmode', route: '/deals' },
    { name: 'Feedbacks', icon: 'thumb_up', route: '/feedbacks' },
  ];

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  // Verifica el tamaño de la pantalla
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 992;
  }

  // Alternar el estado del sidebar
  toggleSidebar() {
    if (this.isMobile) {
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('active');
    } else {
      this.isCollapsed = !this.isCollapsed;
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('collapsed');
    }
  }
}
