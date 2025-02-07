import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { WindowSizeService } from './core/services/window-size.service';

@Component({
  selector: 'app-root',
  providers: [WindowSizeService],
  imports: [
    RouterOutlet,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'travelie';
  isMobile: boolean = false;
  isSmallWindow: boolean = false;

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    // Suscripción a los cambios de tamaño de la ventana (mobile)
    this.windowSizeService.isMobile$.subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
      console.log('Is mobile:', this.isMobile);  // Para depuración
    });

  }
}
