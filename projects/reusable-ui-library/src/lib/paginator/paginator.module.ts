import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { CommonModule } from '@angular/common';
import { PaginatorService } from './paginator.service';
import { PaginatorPipe } from './paginator.pipe';
import { PaginatorDirective } from './paginator.directive';



@NgModule({
  declarations: [
    PaginatorComponent,
    PaginatorPipe,
    PaginatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    PaginatorPipe,
    PaginatorDirective
  ],
  providers: [PaginatorService],
})
export class PaginatorModule { }
