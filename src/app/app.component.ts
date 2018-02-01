import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatTabGroup } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { Message } from './models/message.interface';
import { Notification } from './models/notification.interface';

import { MessageCenterService } from './services/message-center.service';
import { NotificationCenterService } from './services/notification-center.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent implements OnInit {

  title = 'app';

  isAuthenticated = true;

  messages: Message[];
  notifications: Notification[];

  messageSub: any;
  notificationSub: any;

  constructor(public snackBar: MatSnackBar,
              private router: Router,
              private messageService: MessageCenterService,
              private notificationService: NotificationCenterService) {}

  ngOnInit() {
    this.messageSub = this.messageService.getMessages()
      .subscribe(messages => this.messages = messages);

    this.notificationSub = this.notificationService.getNotifications()
      .subscribe(notifications => this.notifications = notifications);
  }

  ngOnDestroy() {
    if (this.messageSub)
      this.messageSub.unsubscribe();

    if (this.notificationSub)
      this.notificationSub.unsubscribe();

  }

  goToSignUp() {
    // Send the user to the Sign Up Page
    this.router.navigate(['/signup']);
  }

  goToSignIn() {
    // Send the user to the Sign In Page
    this.router.navigate(['/signin']);
    // This should be moved in the SignIn component
    // this.isAuthenticated = true;
    // this.openSnackBar('Welcome back, Enjoy the App', 'Close');
  }

  goToSignOut() {
    this.isAuthenticated = false;
    this.openSnackBar('Bye Bye, See you soon', 'Close');
    // Send the user to the Sign Out Page
    this.router.navigate(['/signout']);
  }

  showNotifications() {}

  showMessages() {}

  goToPersonalInfo(tabIndex: number) {
    console.log('requested tab: ' + tabIndex)
    this.router.navigate(['/personalinfo/' + tabIndex]);
  }


  private afterSignIn(): void {
    this.router.navigate(['/dashboard']);
  }

  private openSnackBar(snackbarMessage: string, snackbarAction: string) {
    this.snackBar.open(snackbarMessage, snackbarAction, {
      duration: 2000,
    });
  }

}
