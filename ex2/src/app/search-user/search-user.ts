import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-user',
  imports: [],
  templateUrl: './search-user.html',
  styleUrl: './search-user.css',
})
export class SearchUser {
  @Output() searchChanged = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchChanged.emit(value);
  }
}
