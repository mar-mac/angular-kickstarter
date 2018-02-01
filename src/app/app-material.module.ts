import { NgModule } from '@angular/core';

// Material Design: Navigation Controller
import { MatToolbarModule, MatMenuModule, MatSidenavModule } from '@angular/material';

// Material Design:  Form Controller
import { MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule, MatSelectModule, MatRadioModule } from '@angular/material';

// Material Design:  Layout
import { MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule } from '@angular/material';

// Material Design:  Buttons & indicators
import { MatIconModule, MatButtonModule, MatChipsModule } from '@angular/material';

// Material Design:  Popups & Modals
import { MatDialogModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

// Material Design:  Data Tables
import { MatTableModule  } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule, MatMenuModule, MatSidenavModule,
    MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule, MatSelectModule, MatRadioModule,
    MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule,
    MatIconModule, MatButtonModule, MatChipsModule,
    MatDialogModule, MatTooltipModule, MatSnackBarModule,
    MatTableModule
    ],
  exports: [
    MatToolbarModule, MatMenuModule, MatSidenavModule,
    MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule, MatSelectModule, MatRadioModule,
    MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule,
    MatIconModule, MatButtonModule, MatChipsModule,
    MatDialogModule, MatTooltipModule, MatSnackBarModule,
    MatTableModule
  ]
})
export class AppMaterialModule {}
