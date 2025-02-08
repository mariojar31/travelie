import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-revenue-overview-chart',
  templateUrl: './revenue-overview-chart.component.html',
  styleUrls: ['./revenue-overview-chart.component.scss'],
  standalone: false
})
export class RevenueOverviewChartComponent implements OnInit {
  public chart: any;
  public currentPeriodicity: string = 'monthly'; // Periodicidad actual

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    this.chart = new Chart('revenueChart', {
      type: 'line', // Tipo de gráfica
      data: this.getChartData(), // Datos iniciales
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false, // No comenzar desde cero
            min: 10000, // Establecer el valor mínimo en 10,000
            max: 30000, // Establecer el valor máximo en 30,000
            grid: {
              color: '#e0e0e0' // Gris claro para las líneas de la cuadrícula
            },
            ticks: {
              stepSize: 5000, // Incremento de 5,000 en el eje Y
              callback: (value) => `$${value}`, // Formatear los valores del eje Y con el símbolo de dólar
              font: {
                size: 10 // Tamaño de fuente pequeño
              }
            }
          },
          x: {
            grid: {
              color: '#e0e0e0' // Gris claro para las líneas de la cuadrícula
            },
            ticks: {
              font: {
                size: 10 // Tamaño de fuente pequeño
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#2c3e50', // Azul oscuro para el texto de la leyenda
              font: {
                size: 10 // Tamaño de fuente pequeño
              }
            }
          }
        }
      }
    });
  }

  // Cambiar la periodicidad
  changePeriodicity(periodicity: string) {
    this.currentPeriodicity = periodicity;
    this.updateChartData();
  }

  // Obtener datos iniciales para la gráfica
  getChartData() {
    return {
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
    };
  }

  // Actualizar los datos de la gráfica según la periodicidad
  updateChartData() {
    let labels: string[];
    let data: number[];

    switch (this.currentPeriodicity) {
      case 'weekly':
        labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
        data = [5000, 7000, 6000, 8000];
        break;
      case 'monthly':
        labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        data = [12000, 15000, 18000, 14000, 16000, 19000, 21000, 20000, 22000, 23000, 24000, 25000];
        break;
      case 'yearly':
        labels = ['2021', '2022', '2023'];
        data = [150000, 180000, 200000];
        break;
      default:
        labels = [];
        data = [];
    }

    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = data;
    this.chart.update(); 
  }
}