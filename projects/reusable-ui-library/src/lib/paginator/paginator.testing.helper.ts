
import { EventEmitter } from '@angular/core';
import { PaginatorInstance } from './paginator.interface';

const DEFAULT_ID = 'PAGINATOR_DEFAULT';

export class PaginatorService {
  instances: Record<string, PaginatorInstance> = {
    [DEFAULT_ID]: {
      id: DEFAULT_ID,
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 100,
    },
  };

  change: EventEmitter<string> = new EventEmitter<string>();

  // return instance with given id
  getInstance(id: string): PaginatorInstance {
    return this.instances[id];
  }

  // return currentPage for given id
  getCurrentPage(id: string): number {
    return this.instances[id].currentPage;
  }
}
