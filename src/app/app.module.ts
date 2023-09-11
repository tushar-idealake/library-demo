import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginatorModule, ReusableUILibraryModule, ToastrModule } from 'reusable-ui-library';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaginatorComponent } from './paginator/paginator.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, PaginatorComponent, DatepickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReusableUILibraryModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
