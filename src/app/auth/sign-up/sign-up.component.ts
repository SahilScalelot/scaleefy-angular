import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  registerUser: any = [];
  signUpForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]*$")]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
    });
  }

  signUp(): void {
    console.log(this.signUpForm.get('name')?.value)
    let registerData = JSON.parse(localStorage.getItem('signup')!);
    if (this.signUpForm.invalid) {
      console.log('not valid');
      return;
    }
    if (!registerData) {
      this.registerUser.push(this.signUpForm.value);
      localStorage.setItem('signup', JSON.stringify(this.registerUser));
    } else {
      this.registerUser = registerData;
      this.registerUser.push(this.signUpForm.value);
      localStorage.setItem('signup', JSON.stringify(this.registerUser));
    }
  }
}
