import { Component } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
  standalone: false,
})
export class TablePage {
  cols = ['Name', 'Role', 'Email'];

  data = [
    { name: 'Laura', role: 'Data Analyst', email: 'laura@teste.com' },
    { name: 'André', role: 'Coordinator', email: 'andre@teste.com' },
    { name: 'Julia', role: 'Business Analyst', email: 'julia@teste.com' },
  ];
}
