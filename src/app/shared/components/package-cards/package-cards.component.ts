import { Component } from '@angular/core';

@Component({
  selector: 'app-package-cards',
  templateUrl: './package-cards.component.html',
  styleUrls: ['./package-cards.component.css'],
  standalone: false
})
export class PackageCardsComponent {
  // Datos de los paquetes de viaje (simulados)
  packages = [
    { 
      destination: 'China', 
      name: 'Cultural Exploration', 
      image: 'https://www.elrincondesele.com/wp-content/uploads/2020/01/Portada-China.jpg',
      description: 'Explore ancient culture and landmarks.'
    },
    { 
      destination: 'Venice, Italy', 
      name: 'Venice Dream', 
      image: 'https://media.admagazine.com/photos/6272a4f879a42d127518492f/1:1/w_1414,h_1414,c_limit/Puente%20Rialto%20Venecia.jpg',
      description: 'Experience the magic of Venice’s architecture.'
    },
    { 
      destination: 'Masai Mara, Africa', 
      name: 'Safari Adventure', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m9NylBFTsNZgnXBtVyBR42BxPXSSPBU-Nw&s',
      description: 'Embark on an exciting African safari adventure.'
    },
    
  ];
}