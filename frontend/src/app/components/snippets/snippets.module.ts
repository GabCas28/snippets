import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetsComponent } from './snippets.component';
import { SnippetIconModule } from '../snippet-icon/snippet-icon.module';



@NgModule({
  declarations: [
    SnippetsComponent
  ],
  imports: [
    SnippetIconModule,
    CommonModule
  ],
  exports: [
    SnippetsComponent
  ]
})
export class SnippetsModule { }
