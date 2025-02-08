import { Component, Input } from '@angular/core';

interface UserMessage {
  userName: string;
  userImage: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss'],
  standalone: false
})
export class UserMessagesComponent {
  @Input() messages: UserMessage[] = [
    {
      userName: 'Juan Pérez',
      userImage: 'https://via.placeholder.com/40',
      message: '¡Hola! Este es un mensaje de prueba.',
      date: '2023-10-01',
    },
    {
      userName: 'María Gómez',
      userImage: 'https://via.placeholder.com/40',
      message: 'Me encanta este diseño, ¡buen trabajo!',
      date: '2023-10-02',
    },
    {
      userName: 'Carlos López',
      userImage: 'https://via.placeholder.com/40',
      message: '¿Podrías agregar más funcionalidades?',
      date: '2023-10-03',
    },
    {
      userName: 'Ana Rodríguez',
      userImage: 'https://via.placeholder.com/40',
      message: 'Gracias por la ayuda, todo funciona perfecto.',
      date: '2023-10-04',
    },
  ];
}