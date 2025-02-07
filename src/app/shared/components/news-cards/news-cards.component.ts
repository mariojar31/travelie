import { Component } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss'],
  standalone: false
})
export class NewsCardsComponent {
  // Datos de ejemplo para los planes de viaje
  plans = [
    {
      destination: 'París',
      planName: 'Tour Romántico',
      image: 'https://via.placeholder.com/100x100.png?text=París'
    },
    {
      destination: 'Nueva York',
      planName: 'Aventura Urbana',
      image: 'https://via.placeholder.com/100x100.png?text=Nueva+York'
    },
    {
      destination: 'Tokio',
      planName: 'Cultura Japonesa',
      image: 'https://via.placeholder.com/100x100.png?text=Tokio'
    },
    {
      destination: 'Londres',
      planName: 'Historia y Moda',
      image: 'https://via.placeholder.com/100x100.png?text=Londres'
    }
  ];
}