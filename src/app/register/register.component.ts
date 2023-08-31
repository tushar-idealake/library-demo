import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  onSubmit(f: NgForm) {
    console.log(f);
  }

  Validatorspattern = {
    email: '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}',
    username: '[A-Za-z0-9._%-]{6,9}',
    age: '[0-9]{1,3}'
  }

}
