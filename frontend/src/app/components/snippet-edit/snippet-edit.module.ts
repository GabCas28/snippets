import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetEditComponent } from './snippet-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    SnippetEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    SnippetEditComponent
  ]
})
export class SnippetEditModule { }
