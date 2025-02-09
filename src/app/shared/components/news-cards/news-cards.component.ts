import { Component } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css'],
  standalone: false
})
export class NewsCardsComponent {
  // Datos de ejemplo para los planes de viaje
  plans = [
    {
      destination: 'París, France',
      planName: 'Romantic Getaway',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPK7gzVvAp5IQtgW5OUuTUDyfVZSMU5RvxKQ&s',
      date: '5-10 July',
      booked: '+9'
    },
    {
      destination: 'Tokio, Japan',
      planName: 'Cultural Exploration',
      image: 'https://www.civitatis.com/blog/wp-content/uploads/2022/11/calle-akihabara-tokio-1280x854.jpg',
      date: '12-19 July',
      booked: '+17'
    },
    
    {
      destination: 'Sidney, Australia',
      planName: 'Adventure Tour',
      image: 'https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Sydney-Opera-House-Australia.jpg',
      date: '15-24 July',
      booked: '+12'
    },
    {
      destination: 'New York, USA',
      planName: 'City Hightlights',
      image: 'https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-12/NYC-Underrated-Parks-HERO.jpg?h=7abc3870&itok=Q4bHIuv4',
      date: '20-25 July',
      booked: '+22'
    }
  ];
}