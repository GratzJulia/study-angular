import { Component } from '@angular/core';
import { UserRow } from './user-row/user-row';
import { SearchUser } from './search-user/search-user';

@Component({
  selector: 'app-root',
  imports: [UserRow, SearchUser],
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

  filteredUsers = [...this.users];

  handleSearch(input: string) {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(input.toLowerCase()) ||
        user.role.toLowerCase().includes(input.toLowerCase()),
    );
  }
}
