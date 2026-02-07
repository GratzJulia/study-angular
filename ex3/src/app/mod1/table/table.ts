import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrl: './table.css',
  standalone: false,
})
export class Table {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}
