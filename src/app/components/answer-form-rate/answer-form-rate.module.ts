import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerFormRateComponent } from './answer-form-rate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AnswerFormRateComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],exports:[
    AnswerFormRateComponent
  ]
})
export class AnswerFormRateModule { }
