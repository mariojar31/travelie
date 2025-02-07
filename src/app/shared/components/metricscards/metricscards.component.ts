import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-cards', // Selector del componente
  templateUrl: './metricscards.component.html',
  styleUrl: './metricscards.component.css',
  standalone: false
})
export class MetricscardsComponent { // Nombre de la clase corregido
  @Input() metrics: { value: string | number, label: string, percentage: string }[] = [];
}