import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { RecordsComponent } from './records/records.component';
import { HeaderComponent } from './header/header.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreatePasswordComponent,
    AttendanceComponent,
    RecordsComponent,
    HeaderComponent,
    LeaveRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
     {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
