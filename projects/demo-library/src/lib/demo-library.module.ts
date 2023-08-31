import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoLibraryComponent } from './demo-library.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DemoLibraryComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    DemoLibraryComponent,
  ]
})
export class DemoLibraryModule { }
