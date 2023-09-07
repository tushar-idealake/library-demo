import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReusableUILibraryModule, ToastrModule } from 'reusable-ui-library';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
