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
      description: 'Experience the magic of Venice’s canals and architecture.'
    },
    { 
      destination: 'Masai Mara, Africa', 
      name: 'Safari Adventure', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m9NylBFTsNZgnXBtVyBR42BxPXSSPBU-Nw&s',
      description: 'Embark on an exciting African safari adventure.'
    },
    { 
      destination: 'London', 
      name: 'History and Fashion', 
      image: 'https://media.cntraveler.com/photos/66ec5d99c2fb737668ff3872/16:9/w_1280,c_limit/GettyImages-488479062.jpg',
      description: 'Explore British history and iconic fashion.'
    },
    { 
      destination: 'Dubai', 
      name: 'Luxury and Adventure', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWZiVLr5e6M8uMXhLAgVoJ8okz9qA7TbTyg&s',
      description: 'Indulge in luxury and thrilling experiences in Dubai.'
    },
    { 
      destination: 'Rome', 
      name: 'Art and Culture', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-NQzkyXqB-mMXvFznwB3Xnc6kIIn6HDrgQ&s',
      description: 'Discover the rich art and culture of ancient Rome.'
    },
    { 
      destination: 'Sydney', 
      name: 'Nature and Beaches', 
      image: 'https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney.jpg',
      description: 'Enjoy the stunning beaches and natural beauty of Sydney.'
    },
    { 
      destination: 'Bali', 
      name: 'Relax and Spirituality', 
      image: 'https://ik.imagekit.io/tvlk/blog/2023/09/shutterstock_631736717.jpg',
      description: 'Find peace and serenity in Bali’s spiritual retreats.'
    },
    { 
      destination: 'Barcelona', 
      name: 'Architecture and Party', 
      image: 'https://www.traveloffpath.com/wp-content/uploads/2022/05/Gaudis-La-Sagrada-Familia-In-Barcelona-Catalonia-Spain.jpg.webp',
      description: 'Explore modernist architecture and lively nightlife.'
    },
    { 
      destination: 'Berlin', 
      name: 'Modern History', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItGh26Ag_CQP6lMh3Sf1QxRDuu1bqs3G6ww&s',
      description: 'Dive into Berlin’s rich history and vibrant culture.'
    },
    { 
      destination: 'Prague', 
      name: 'Fairy Tale City', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL6R1eq_Gu6oE9sioTcybHzHJkRJHMB-8ng&s',
      description: 'Explore the charming streets of this fairy tale city.'
    },
    { 
      destination: 'Istanbul', 
      name: 'Ancient Culture', 
      image: 'https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg',
      description: 'Discover the fascinating blend of cultures in Istanbul.'
    },
    { 
      destination: 'Singapore', 
      name: 'Futurism and Tradition', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-xWS8IE8w0IFMgywRH5me9k_HAVLAzR0tA&s  ',
      description: 'Experience the harmony of futuristic and traditional elements in Singapore.'
    }
  ];
}