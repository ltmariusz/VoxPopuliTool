import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NewPasswordDialogComponent } from './new-password-dialog/new-password-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ActiveUserDialogComponent } from './active-user-dialog/active-user-dialog.component';
import { CloseQuestionnaireDialogComponent } from './close-questionnaire-dialog/close-questionnaire-dialog.component';



@NgModule({
  declarations: [
    NewPasswordDialogComponent,
    ActiveUserDialogComponent,
    CloseQuestionnaireDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    NewPasswordDialogComponent,
    ActiveUserDialogComponent
  ]
})
export class CustomDialogModule { }
