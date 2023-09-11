import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment_ from 'moment/moment';
const moment = moment_;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  @ViewChild('datepicker') datepicker: any;
  @ViewChild('datepicker2') datepicker2: any;
  invalidDates: string[] = [];
  validDates: string[] = [];

  date = '';
  model = moment('29/11/2020', 'DD/MM/YYYY').format();

  date2 = '';
  model2 = moment('25/12/2020', 'DD/MM/YYYY').format();

  date3 = '';
  model3 = moment('25/12/2020', 'DD/MM/YYYY').format();

  date4 = '';
  model4 = moment().format();

  date5 = '';
  model5 = moment().format();

  ngOnInit(): void {
    const tomorrow = moment().add(1, 'days').format();
    const someDayOfNextMonth = moment().add(1, 'month').format();
    this.invalidDates.push(tomorrow);
    this.invalidDates.push(someDayOfNextMonth);

    const today = moment().format();
    const oneMonthFromNow = moment().add(1, 'months').format();
    const oneMonthFromNowPlusOneDay = moment()
      .add(1, 'months')
      .add(1, 'days')
      .format();
    const firstDayOfNextMonth = moment()
      .add(1, 'months')
      .startOf('month')
      .format();

    this.validDates = [
      today,
      tomorrow,
      firstDayOfNextMonth,
      oneMonthFromNow,
      oneMonthFromNowPlusOneDay,
    ];

  }
}
