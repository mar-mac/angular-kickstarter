import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/public/home/home.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { SignOutComponent } from './components/public/sign-out/sign-out.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { PersonalinfoComponent } from './components/auth/personalinfo/personalinfo.component';
import { NotificationsComponent } from './components/auth/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    DashboardComponent,
    HomeComponent,
    PersonalinfoComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpModule,
    AppRoutingModule,
    AppMaterialModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
