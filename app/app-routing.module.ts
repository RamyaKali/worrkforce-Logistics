import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './user/layout/layout.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { addemployeeComponent } from './employee/addemployee/addemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';

const routes: Routes = [
  {path:'',component:LayoutComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'addemployee',component:addemployeeComponent},
  {path:'deleteemployee',component:DeleteemployeeComponent},
  {path:'listemployee',component:ListemployeeComponent},
  {path:'updateemployee',component:UpdateemployeeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
