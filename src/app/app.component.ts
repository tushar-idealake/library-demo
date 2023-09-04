import { Component, OnInit } from '@angular/core';
import { FormGenericSpinnerService } from 'demo-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private spinner: FormGenericSpinnerService) {}
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  title = 'library-demo';
}
