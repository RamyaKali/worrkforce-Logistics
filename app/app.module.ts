import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LayoutComponent } from './user/layout/layout.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import{ addemployeeComponent} from './employee/addemployee/addemployee.component'
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { FormsModule } from '@angular/forms';
import{HttpClient, HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    addemployeeComponent,
    ListemployeeComponent,
    DeleteemployeeComponent,
    UpdateemployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
