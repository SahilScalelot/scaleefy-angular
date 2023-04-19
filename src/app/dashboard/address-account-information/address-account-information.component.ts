import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-address-account-information',
  templateUrl: './address-account-information.component.html',
  styleUrls: ['./address-account-information.component.sass']
})

export class AddressAccountInformationComponent {
  shippingAddressForm = this._formBuilder.group({
    fname: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]*$")]],
    lname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]],
    email_address: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    telephone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    zip_code: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    address: ['', [Validators.required]]           
  })

  billingAddressForm = this._formBuilder.group({
    fname: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]*$")]],
    lname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]],
    email_address: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    telephone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    zip_code: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    address: ['', [Validators.required]]           
  })

  constructor(private _formBuilder : FormBuilder){ } 
}