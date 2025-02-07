import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  // Datos del usuario
  user = {
    name: 'Juan Pérez',
    role: 'Administrador',
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg' // URL de ejemplo para la foto del usuario
  };

  // Notificaciones de ejemplo
  notifications = [
    { message: 'Nueva reserva realizada', timestamp: 'Hace 10 minutos' },
    { message: 'El paquete ha sido actualizado', timestamp: 'Hace 30 minutos' },
    { message: 'Un nuevo usuario se ha registrado', timestamp: 'Hace 1 hora' }
  ];

  section: string = "Dashboard"; // Por defecto, el nombre de la sección

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Escuchar cambios en la ruta activa
    this.router.events.subscribe(() => {
      // Obtener la ruta activa (el nombre de la sección) de la ruta actual
      this.section = this.activatedRoute.snapshot.firstChild?.data['title'] || 'Dashboard';
    });
  }

  // Función para ver notificaciones
  viewNotification(notification: string) {
    console.log('Ver notificación:', notification);
  }
}
