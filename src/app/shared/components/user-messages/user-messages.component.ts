import { Component, Input } from '@angular/core';

interface UserMessage {
  userName: string;
  userImage: string;
  message: string;
  time: string;
  noRead: string;
}

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
  standalone: false
})
export class UserMessagesComponent {
  @Input() messages: UserMessage[] = [
    {
      userName: 'Europia Hotel',
      userImage: 'https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1200/Logotipo-Hotel-Europa.png',
      message: 'We are pleased to...',
      time: '10:00 PM',
      noRead: '2'
    },
    {
      userName: 'Global Travel Co',
      userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65OopSeehTgFG7m0J_ujNAZdw1rCcLiAYUQ&s',
      message: 'We have updated ou...',
      time: '2:30 PM',
      noRead: '1'
    },
    {
      userName: 'Kalendra Umbara',
      userImage: 'https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=',
      message: 'Hi, I need assista...',
      time: '9:45 AM',
      noRead: '3'
    },
    {
      userName: 'Osman Farooq',
      userImage: 'https://thumbs.dreamstime.com/b/atractivo-rostro-de-mujer-en-perfil-femenino-gris-216783478.jpg',
      message: 'Hello, I had an am...',
      time: '10:15 AM',
      noRead: '1'
    },
    {
      userName: 'Melinda Jenkins',
      userImage: 'https://wallpapers.com/images/featured/imagenes-de-perfil-de-mujeres-8vxjyailtsus6skr.jpg',
      message: 'Can you provide m...',
      time: '9:45 AM',
      noRead: '2'
    },
    {
      userName: 'David Hernandez',
      userImage: 'https://st2.depositphotos.com/1075946/5334/i/950/depositphotos_53346995-stock-photo-handsome-40-year-old-man.jpg',
      message: 'Hello, I need some...',
      time: '10:15 AM',
      noRead: '1'
    },
  ];
}