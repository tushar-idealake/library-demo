import { Pipe, PipeTransform } from '@angular/core';
import { PaginatorService } from './paginator.service';
import { PaginatorPipeArgs,PaginatorInstance } from './paginator.interface';


/**
 * Pagination Pipe which paginates the array for the provided arguments such as `itemsPerPage` and `currentPage`
 */
@Pipe({
  name: 'Paginator',
})

export class PaginatorPipe implements PipeTransform {
  /**
   *
   * @param PaginatorService service for angular pagiantor
   */
  constructor(private PaginatorService: PaginatorService) { }

  /**
   * this pipes paginates the array for the provided arguments such as `itemsPerPage` and `currentPage`
   *
   * @param array input array for which the manipulation happens
   * @param args input arguments for the paginator pipe
   */
  transform<T>(array: Array<T>, args?: PaginatorPipeArgs): Array<T> {
    const instance: PaginatorInstance = this.createInstance(array, args);

    // create pagination information
    this.PaginatorService.registerInstance(instance);

    // set the slicing range
    const start = (instance.currentPage - 1) * instance.itemsPerPage;
    const end = instance.currentPage * instance.itemsPerPage;

    return array.slice(start, end);
  }

  /**
   * create an instance for each pipe
   *
   * @param array input array for which the manipulation happens
   * @param args input arguments for the paginator pipe
   */
  private createInstance(array: unknown[], args?: PaginatorPipeArgs): PaginatorInstance {
    return {
      id: args?.id ? args.id : PaginatorService.id,
      currentPage: args?.currentPage ? args.currentPage : 1,
      itemsPerPage: args?.itemsPerPage ? args.itemsPerPage : 10,
      totalItems: array.length,
    };
  }
}
