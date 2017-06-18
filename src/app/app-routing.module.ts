import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
