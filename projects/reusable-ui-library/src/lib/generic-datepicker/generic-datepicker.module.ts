import { NgModule } from '@angular/core';
import { GenericdatepickerComponent } from './generic-datepicker.component';
import { CommonModule } from '@angular/common';
import { WeekdayPipe } from './pipes/weekday/weekday.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ GenericdatepickerComponent, WeekdayPipe ],
  imports: [ CommonModule, FormsModule ],
  exports: [ GenericdatepickerComponent, WeekdayPipe ],
})
export class GenericdatepickerModule {
}
