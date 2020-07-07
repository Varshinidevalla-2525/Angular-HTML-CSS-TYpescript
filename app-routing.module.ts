import { AppComponent } from './app.component';
import { twoComponent } from './displayClient/two.component';
import { oneComponent } from './addClient/one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/add', pathMatch: 'full' },

  {
    path: 'display' , component: AppComponent
  },
  {path: 'add' , component: AppComponent },
  {path: 'edit' , component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true
      }
    )
  ],providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
