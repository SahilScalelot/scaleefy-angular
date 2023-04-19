import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-personal-info-edit',
  templateUrl: './personal-info-edit.component.html',
  styleUrls: ['./personal-info-edit.component.sass']
})
export class PersonalInfoEditComponent {

  constructor(private _formBuilder: FormBuilder){ }

  personalAndContactDetailsForm = this._formBuilder.group({
    name: ['', [Validators.required]],
    telephone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    orderDate: ['', [Validators.required]],
    userEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
}
