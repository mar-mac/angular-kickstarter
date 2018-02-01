import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

// import components
import { AppComponent } from './app.component';

import { HomeComponent } from './components/public/home/home.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { SignOutComponent } from './components/public/sign-out/sign-out.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { PersonalinfoComponent } from './components/auth/personalinfo/personalinfo.component';
import { NotificationsComponent } from './components/auth/notifications/notifications.component';
import { MessagesComponent } from './components/auth/messages/messages.component';
// import services
import { MessageCenterService } from './services/message-center.service';
import { NotificationCenterService  } from './services/notification-center.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    DashboardComponent,
    HomeComponent,
    PersonalinfoComponent,
    NotificationsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpModule,
    AppRoutingModule,
    AppMaterialModule, FlexLayoutModule
  ],
  providers: [
    NotificationCenterService, MessageCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
