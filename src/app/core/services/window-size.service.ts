import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Proveemos el servicio globalmente
})
export class WindowSizeService {
  // Inicializamos los Subject con el valor actual
  private isMobileSubject = new BehaviorSubject<boolean>(this.isMobile());
  private isSmallWindowSubject = new BehaviorSubject<boolean>(this.isSmallWindow());

  constructor() {}

  // Métodos getter para observar los cambios
  get isMobile$() {
    return this.isMobileSubject.asObservable();
  }

  get isSmallWindow$() {
    return this.isSmallWindowSubject.asObservable();
  }

  // Listener para el evento de cambio de tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Obtenemos el nuevo estado del tamaño de la ventana
    const isMobile = this.isMobile();
    const isSmallWindow = this.isSmallWindow();

    // Solo actualizamos si el valor ha cambiado
    if (isMobile !== this.isMobileSubject.value) {
      this.isMobileSubject.next(isMobile);
    }

    if (isSmallWindow !== this.isSmallWindowSubject.value) {
      this.isSmallWindowSubject.next(isSmallWindow);
    }
  }

  private isMobile(): boolean {
    return window.innerWidth <= 768;  // Cambia este umbral según lo que definas como "móvil"
  }

  private isSmallWindow(): boolean {
    return window.innerWidth <= 1024;  // Cambia este umbral según lo que definas como "ventana pequeña"
  }
}
