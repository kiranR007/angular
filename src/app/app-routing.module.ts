import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventparticipationComponent } from './eventparticipation/eventparticipation.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:EventDashboardComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'eventdetails',component:EventdetailsComponent},
  {path:'eventparticipation',component:EventparticipationComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'verifyemail',component:VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
