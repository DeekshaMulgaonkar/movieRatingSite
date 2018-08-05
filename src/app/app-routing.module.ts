import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDataComponent } from './login-data/login-data.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginDataComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'rating/:id', component: RatingPageComponent},
]

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
