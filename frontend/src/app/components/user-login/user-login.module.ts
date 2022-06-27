import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
  ],
  exports: [
    UserLoginComponent
  ]
})
export class UserLoginModule { }
