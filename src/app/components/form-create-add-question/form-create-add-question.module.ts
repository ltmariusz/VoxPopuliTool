import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateAddQuestionComponent } from './form-create-add-question.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FormCreateAddQuestionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    FormCreateAddQuestionComponent
  ]
})
export class FormCreateAddQuestionModule { }
