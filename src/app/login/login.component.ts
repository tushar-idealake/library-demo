import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormGenericSpinnerService,
  ToastrService,
  VALIDATION_REGEX,
} from 'reusable-ui-library';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private spinner: FormGenericSpinnerService,
    private snackbar: ToastrService,
    private http: HttpClient
    // private router: Router
  ) {}

  reusableValidation = VALIDATION_REGEX;

  onSubmit(f: NgForm): void {
    console.log(f);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      // this.router.navigate(['/dashboard']);
      this.snackbar.success('Login Successful!', 'Please Continue');
    }, 3000);
  }
  keyword = 'name';
  country = '';

  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    },
  ];
  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }
}
