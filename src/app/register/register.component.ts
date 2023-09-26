import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { FormGenericSpinnerService, ToastrService } from 'reusable-ui-library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private http: HttpClient,
    private snackbar: ToastrService,
    private spinner: FormGenericSpinnerService,
    private router: Router
  ) {}

  onSubmit(f: NgForm) {
    console.log(f);
    this.spinner.show();
    this.http
      .post<any>(
        'https://node-backend-3ynr.onrender.com/api/v1/users/signup',
        f,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response',
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
          if (res.body.status == 'success') {
            this.spinner.hide();
            this.snackbar.success('Registered Successfully', 'Please Continue');
            this.router.navigate(['dashboard']);
          }
        },
        (error: HttpErrorResponse) => {
          this.spinner.hide();
          this.snackbar.error(error.error.status, error.error.message);
        }
      );
  }

  Validatorspattern = {
    email: '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}',
    username: '[A-Za-z0-9._%-]{6,9}',
    age: '[0-9]{1,3}',
    password: '[A-Za-z0-9.@_%-]{6,12}',
    mobile: '[0-9]{10}'
  };
}
