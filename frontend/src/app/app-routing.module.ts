import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetDetailComponent } from './components/snippet-detail/snippet-detail.component';
import { SnippetEditComponent } from './components/snippet-edit/snippet-edit.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const SNIPPETS = 'snippets';

const routes: Routes = [
  {
    path: '',
    // TODO find a way to wait for the default template to be loaded before choosing the view to redirect to
    redirectTo: SNIPPETS,
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: SNIPPETS
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'snippets/new',
    component: SnippetEditComponent
  },
  {
    path: 'snippets/edit/:id',
    component: SnippetEditComponent
  },
  {
    path: 'snippets/:id',
    component: SnippetDetailComponent
  },
  {
    path: SNIPPETS,
    component: SnippetsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: SNIPPETS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
