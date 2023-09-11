import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaginatorComponent } from 'reusable-ui-library';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'paginator', component: PaginatorComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'datepicker', component: DatepickerComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
