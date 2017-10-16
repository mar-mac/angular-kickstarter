import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'app';

  isAuthenticated = true;

  constructor(public snackBar: MatSnackBar) {}

  signUp() {

  }

  signIn() {
    this.isAuthenticated = true;
    this.openSnackBar('Welcome back, Enjoy the App', 'Close');
  }

  signOut() {
    this.isAuthenticated = false;
    this.openSnackBar('Bye Bye, See you soon', 'Close');
  }

  private openSnackBar(snackbarMessage: string, snackbarAction: string) {
    this.snackBar.open(snackbarMessage, snackbarAction, {
      duration: 2000,
    });
  }
}
