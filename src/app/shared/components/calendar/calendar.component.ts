import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone:false
})
export class CalendarComponent {
  currentDate = new Date(); // Fecha actual

  // Método para manejar la selección de fechas
  onDateSelected(date: Date): void {
    console.log('Fecha seleccionada:', date);
  }
}