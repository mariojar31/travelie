import { Component } from '@angular/core';

@Component({
  selector: 'app-package-cards',
  templateUrl: './package-cards.component.html',
  styleUrls: ['./package-cards.component.scss'],
  standalone: false
})
export class PackageCardsComponent {
  // Datos de los paquetes de viaje (simulados)
  packages = [
    { destination: 'París', name: 'Tour Romántico', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Nueva York', name: 'Aventura Urbana', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Tokio', name: 'Cultura Japonesa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Londres', name: 'Historia y Moda', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Dubái', name: 'Lujo y Aventura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Roma', name: 'Arte y Cultura', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Sídney', name: 'Naturaleza y Playas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Bali', name: 'Relax y Espiritualidad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Barcelona', name: 'Arquitectura y Fiesta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Berlín', name: 'Historia Moderna', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Praga', name: 'Ciudad de Cuento', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Estambul', name: 'Cultura Milenaria', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    { destination: 'Singapur', name: 'Futurismo y Tradición', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-_uuE4e7TJ7ZEwQ5jMsWZB9Bw6tVHPo60Q&s' },
    
  ];
}