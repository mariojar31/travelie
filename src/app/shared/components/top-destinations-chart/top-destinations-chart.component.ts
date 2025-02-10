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
      type: 'doughnut', 
      data: {
        labels: ['Tokio, Japan', 'Sidney, Australia', 'Paris, France', 'Venice, Italy'], 
        datasets: [
          {
            label: 'Reservas',
            data: [35, 28, 22, 15], 
            backgroundColor: [
              '#3482c4', 
              '#43aaff', 
              '#b7e1ff', 
              '#e8f5fe', 
            
            ],
            borderColor: '#ffffff', 
            borderWidth: 0
          }
        ]
      },
      options: {
        rotation: 180,
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false,
            position: 'right',
            labels: {
              color: '#2c3e50' // Azul oscuro para el texto de la leyenda
            }
          }
        }
      }
    });
  }
}