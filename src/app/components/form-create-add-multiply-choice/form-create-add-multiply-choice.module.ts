import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateAddMultiplyChoiceComponent } from './form-create-add-multiply-choice.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    FormCreateAddMultiplyChoiceComponent
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
    MatCheckboxModule
  ],
  exports:[
    FormCreateAddMultiplyChoiceComponent
  ]
})
export class FormCreateAddMultiplyChoiceModule { }
