import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerFormConfirmComponent } from './answer-form-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AnswerFormConfirmComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    AnswerFormConfirmComponent
  ]
})
export class AnswerFormConfirmModule { }
