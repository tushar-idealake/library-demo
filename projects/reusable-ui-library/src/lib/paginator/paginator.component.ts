import { Component } from '@angular/core';
import { jsonArray } from './data';

@Component({
  selector: 'p-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  styles: [
  ]
})
export class PaginatorComponent {
  currentPage = 1;
  itemsPerPage = 15;
  jsonArray = jsonArray;
}
