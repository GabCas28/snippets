import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SnippetsModule } from './components/snippets/snippets.module';
import { SnippetDetailComponent } from './components/snippet-detail/snippet-detail.component';
import { SnippetDetailModule } from './components/snippet-detail/snippet-detail.module';
import { SnippetIconModule } from './components/snippet-icon/snippet-icon.module';
import { AppRoutingModule } from './app-routing.module';
import { SnippetEditModule } from './components/snippet-edit/snippet-edit.module';
import { UserLoginModule } from './components//user-login/user-login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
    SnippetsModule,
    SnippetDetailModule,
    AppRoutingModule,
    SnippetEditModule,
    UserLoginModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
