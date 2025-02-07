import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-revenue-overview-chart',
  templateUrl: './revenue-overview-chart.component.html',
  styleUrls: ['./revenue-overview-chart.component.css'],
  standalone: false
})
export class RevenueOverviewChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    this.chart = new Chart('revenueChart', {
      type: 'line', // Tipo de gráfica
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Eje X
        datasets: [
          {
            label: 'Ingresos (USD)',
            data: [12000, 15000, 18000, 14000, 16000, 19000, 21000, 20000, 22000, 23000, 24000, 25000], // Datos de ejemplo
            borderColor: '#2c3e50', // Azul oscuro
            backgroundColor: 'rgba(161, 202, 243, 0.1)', // Azul oscuro con transparencia
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false, // No comenzar desde cero
            min: 10000, // Establecer el valor mínimo en 10,000
            grid: {
              color: '#e0e0e0' // Gris claro para las líneas de la cuadrícula
            },
            ticks: {
              stepSize: 2000, // Incremento de 2,000 en el eje Y
              callback: (value) => `$${value}` // Formatear los valores del eje Y con el símbolo de dólar
            }
          },
          x: {
            grid: {
              color: '#e0e0e0' // Gris claro para las líneas de la cuadrícula
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#2c3e50' // Azul oscuro para el texto de la leyenda
            }
          }
        }
      }
    });
  }
}