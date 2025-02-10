import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-revenue-overview-chart',
  templateUrl: './revenue-overview-chart.component.html',
  styleUrls: ['./revenue-overview-chart.component.css'],
  standalone: false
})
export class RevenueOverviewChartComponent implements OnInit{
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    this.chart = new Chart('revenueChart', {
      type: 'line', // Tipo de gráfica: línea
      data: {
        labels: ['Son', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Días de la semana
        datasets: [
          {
            label: 'Ingresos (USD)', // Etiqueta de la serie
            data: [380, 420, 280, 635, 420, 590, 430], // Datos de ingresos
            borderColor: '#3498db', // Color de la línea
            backgroundColor: 'rgba(52, 152, 219, 0.2)', // Color de relleno debajo de la línea
            fill: false, // Rellenar el área debajo de la línea
            tension: 0.4, // Hace que la línea sea suave (spline)
            borderWidth: 2, // Grosor de la línea
            pointBackgroundColor: '#00000000', // Color de los puntos
            pointBorderColor: '#00000000', // Borde de los puntos
            pointBorderWidth: 1, // Grosor del borde de los puntos
            pointRadius: 3, // Tamaño de los puntos
            pointHoverRadius: 5, // Tamaño de los puntos al pasar el mouse
            pointHoverBorderColor: '#42aaff',
            pointHoverBackgroundColor: '#42aaff'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: 'top',
            labels: {
              color: '#2c3e50' // Color del texto de la leyenda
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#e8f5fe', // Color de fondo del tooltip
            titleColor: '#0b0b0b', // Color del título del tooltip
            bodyColor: '#0b0b0b', // Color del cuerpo del tooltip
            borderWidth: 0, // Grosor del borde del tooltip
            position: 'average', // Posiciona el tooltip cerca del punto
            yAlign: 'bottom',
            caretPadding: 10,
            callbacks: {
              title: (context) => {
                // Personaliza el título del tooltip
                return `$${context[0].raw}`;
              },
              label: (context) => {
                // Personaliza el cuerpo del tooltip
                return `${context.label}`;
              }
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              color: '#2c3e50',
            },
            grid: {
              display: false // Oculta las líneas de la cuadrícula en el eje X
            }
          },
          y: {
            display: true,
            title: {
              display: false,
              color: '#2c3e50' // Color del título del eje Y
            },
            grid: {
              display: true,
            },
            min: 0,
            
            ticks: {
              stepSize: 200,
              callback: (value: number | string) => {
                // Agrega el prefijo "$" a los valores del eje Y
                return `$${value}`;
              },
              
            }
          }
        }
      }
    });
  }
}