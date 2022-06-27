import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetDetailComponent } from './snippet-detail.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    SnippetDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SnippetDetailComponent
  ]
})
export class SnippetDetailModule { }
