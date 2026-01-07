import { Component } from '@angular/core';
import { UserRow } from './user-row/user-row';

@Component({
  selector: 'app-root',
  imports: [UserRow],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = [
    {
      name: 'Laura',
      email: 'laura@radixeng.com',
      role: 'Data Analyst',
      imgURL: 'photos/laura.png',
    },
    {
      name: 'Julia',
      email: 'julia@radixeng.com',
      role: 'Business Analyst',
      imgURL: 'photos/julia.png',
    },
    {
      name: 'André',
      email: 'andre@radixeng.com',
      role: 'Project Coordenator',
      imgURL: 'photos/andre.png',
    },
    {
      name: 'Rômulo',
      email: 'romulo@radixeng.com',
      role: 'Web Designer',
      imgURL: 'photos/romulo.png',
    },
  ];
}
