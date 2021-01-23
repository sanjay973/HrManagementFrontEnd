import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { RouteGuardGuard } from './guard/route-guard.guard';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LoginComponent } from './login/login.component';
import { RecordsComponent } from './records/records.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AdminGuardGuard]},
{ path: 'createPassword/:token', component: CreatePasswordComponent },
{ path: 'attendance', component: AttendanceComponent,canActivate:[RouteGuardGuard] },
{path:'records',component:RecordsComponent,canActivate:[AdminGuardGuard]},
{path:'leave-request',component:LeaveRequestComponent,canActivate:[RouteGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
