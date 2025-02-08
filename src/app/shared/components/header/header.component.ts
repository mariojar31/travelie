import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  isUserMenuOpen = false;

  // Datos del usuario (simulados)
  user = {
    name: 'Juan Pérez',
    role: 'Administrador',
    imageUrl: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp' // URL de la imagen del usuario
  };

  // Alternar el menú desplegable
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  // Cerrar el menú desplegable al hacer clic fuera de él
  closeUserMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isUserMenuOpen = false;
    }
  }


  section: string = "Dashboard"; // Por defecto, el nombre de la sección

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Escuchar cambios en la ruta activa
    this.router.events.subscribe(() => {
      // Obtener la ruta activa (el nombre de la sección) de la ruta actual
      this.section = this.activatedRoute.snapshot.firstChild?.data['title'] || 'Dashboard';
    });
  }

  isNotificationsOpen = false;

  // Lista de notificaciones (simuladas)
  notifications = [
    'Nueva reserva confirmada',
    'Mensaje recibido de Juan Pérez',
    'Recordatorio: Reunión a las 3 PM'
  ];

  // Alternar el dropdown de notificaciones
  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }

  // Función para ver una notificación
  viewNotification(notification: string) {
    console.log('Ver notificación:', notification);
    // Aquí puedes agregar la lógica para manejar la notificación
  }

  // Cerrar el dropdown de notificaciones al hacer clic fuera de él
  @HostListener('document:click', ['$event'])
  closeNotifications(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isNotificationsOpen = false;
    }
  }
}
