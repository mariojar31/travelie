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
  active: string = 'Dashboard';

  public setActive(section:string){
    this.active=section
  }

  // Datos de las secciones del sidebar
  sections = [
    { name: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
    { name: 'Packages', icon: 'cases', route: '/packages' },
    { name: 'Bookings', icon: 'check_box', route: '/bookings' },
    { name: 'Calendar', icon: 'calendar_month', route: '/calendar' },
    { name: 'Travelers', icon: 'backpack', route: '/travelers' },
    { name: 'Guides', icon: 'explore', route: '/guides' },
    { name: 'Gallery', icon: 'photo_library', route: '/gallery' },
    { name: 'Messages', icon: 'sms', route: '/messages', alert: "7" },
    { name: 'Deals', icon: 'percent', route: '/deals' },
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
