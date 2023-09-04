import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGenericSpinnerService } from 'demo-library';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private spinner: FormGenericSpinnerService) {}

  onSubmit(f: NgForm) {
    console.log(f);
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    
  }

}
