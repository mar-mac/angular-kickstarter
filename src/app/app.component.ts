import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public snackBar: MatSnackBar,
              private router: Router) {}

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

  goToPersonalInfo() {
    this.router.navigate(['/personalinfo']);
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
