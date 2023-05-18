import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerFormTitleComponent } from './answer-form-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AnswerFormTitleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    AnswerFormTitleComponent
  ]
})
export class AnswerFormTitleModule { }
