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
    { destination: 'París', name: 'Tour Romántico', image: 'https://via.placeholder.com/300x180.png?text=París' },
    { destination: 'Nueva York', name: 'Aventura Urbana', image: 'https://via.placeholder.com/300x180.png?text=Nueva+York' },
    { destination: 'Tokio', name: 'Cultura Japonesa', image: 'https://via.placeholder.com/300x180.png?text=Tokio' },
    { destination: 'Londres', name: 'Historia y Moda', image: 'https://via.placeholder.com/300x180.png?text=Londres' },
    { destination: 'Dubái', name: 'Lujo y Aventura', image: 'https://via.placeholder.com/300x180.png?text=Dubái' },
    { destination: 'Roma', name: 'Arte y Cultura', image: 'https://via.placeholder.com/300x180.png?text=Roma' },
    { destination: 'Sídney', name: 'Naturaleza y Playas', image: 'https://via.placeholder.com/300x180.png?text=Sídney' },
    { destination: 'Bali', name: 'Relax y Espiritualidad', image: 'https://via.placeholder.com/300x180.png?text=Bali' },
    { destination: 'Barcelona', name: 'Arquitectura y Fiesta', image: 'https://via.placeholder.com/300x180.png?text=Barcelona' },
    { destination: 'Berlín', name: 'Historia Moderna', image: 'https://via.placeholder.com/300x180.png?text=Berlín' },
    { destination: 'Praga', name: 'Ciudad de Cuento', image: 'https://via.placeholder.com/300x180.png?text=Praga' },
    { destination: 'Estambul', name: 'Cultura Milenaria', image: 'https://via.placeholder.com/300x180.png?text=Estambul' },
    { destination: 'Singapur', name: 'Futurismo y Tradición', image: 'https://via.placeholder.com/300x180.png?text=Singapur' },
    { destination: 'Toronto', name: 'Multiculturalidad', image: 'https://via.placeholder.com/300x180.png?text=Toronto' },
    { destination: 'Seúl', name: 'Tecnología y Tradición', image: 'https://via.placeholder.com/300x180.png?text=Seúl' },
    { destination: 'Ciudad del Cabo', name: 'Naturaleza y Aventura', image: 'https://via.placeholder.com/300x180.png?text=Ciudad+del+Cabo' },
    { destination: 'Moscú', name: 'Historia y Arquitectura', image: 'https://via.placeholder.com/300x180.png?text=Moscú' },
    { destination: 'Río de Janeiro', name: 'Playas y Carnaval', image: 'https://via.placeholder.com/300x180.png?text=Río+de+Janeiro' },
    { destination: 'Ámsterdam', name: 'Canales y Cultura', image: 'https://via.placeholder.com/300x180.png?text=Ámsterdam' },
    { destination: 'Viena', name: 'Música y Elegancia', image: 'https://via.placeholder.com/300x180.png?text=Viena' }
  ];
}