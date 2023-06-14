import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderPasswordComponent } from './reminder-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes=[
  {path: '', component:ReminderPasswordComponent}
]

@NgModule({
  declarations: [
    ReminderPasswordComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    FormsModule,  
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    ReminderPasswordComponent
  ]
})
export class ReminderPasswordModule { }
