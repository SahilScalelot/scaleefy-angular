import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { IndexComponent } from '../dashboard/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
];

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    NewPasswordComponent,
    VerificationCodeComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
