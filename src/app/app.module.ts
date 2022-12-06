import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventparticipationComponent } from './eventparticipation/eventparticipation.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { EventModel } from './event-dashboard/event-dash board.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { MatProgrssBarModule } from '@angular/mererial/progrss-spinner';*/
/*import { EventsdashboardComponent } from './eventsdashboard/eventsdashboard.component';*/



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EventDashboardComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    HomepageComponent,
    EventdetailsComponent,
    EventparticipationComponent,
    UserdashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
