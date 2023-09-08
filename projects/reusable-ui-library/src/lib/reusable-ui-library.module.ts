import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGenericInputComponent } from './form-generic-input/form-generic-input.component';
import { FormGenericToggleComponent } from './form-generic-toggle/form-generic-toggle.component';
import { FormGenericSpinnerModule } from './form-generic-spinner/form-generic-spinner.module';
import { AutocompleteLibModule } from './form-autocomplete/autocomplete-lib.module'
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormGenericInputComponent,
    FormGenericToggleComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormGenericInputComponent,
    FormGenericToggleComponent,
    FormGenericSpinnerModule,
    AutocompleteLibModule,
   
  ]
})
export class ReusableUILibraryModule { }
