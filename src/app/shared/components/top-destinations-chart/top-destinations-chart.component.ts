import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-top-destinations-chart',
  templateUrl: './top-destinations-chart.component.html',
  styleUrls: ['./top-destinations-chart.component.css'],
  standalone: false
})
export class TopDestinationsChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    this.chart = new Chart('topDestinationsChart', {
      type: 'doughnut', // Tipo de gráfica
      data: {
        labels: ['París', 'Nueva York', 'Tokio', 'Londres', 'Dubái'], // Destinos
        datasets: [
          {
            label: 'Reservas',
            data: [300, 250, 200, 150, 100], // Datos de ejemplo
            backgroundColor: [
              '#2c3e50', // Azul oscuro
              '#3498db', // Azul claro
              '#7f8c8d', // Gris
              '#bdc3c7', // Gris claro
              '#e0e0e0' // Gris muy claro
            ],
            borderColor: '#ffffff', // Borde blanco
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#2c3e50' // Azul oscuro para el texto de la leyenda
            }
          }
        }
      }
    });
  }
}