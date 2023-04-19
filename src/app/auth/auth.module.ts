import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    NewPasswordComponent,
    VerificationCodeComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    VerificationCodeComponent
  ]
})
export class AuthModule { }
