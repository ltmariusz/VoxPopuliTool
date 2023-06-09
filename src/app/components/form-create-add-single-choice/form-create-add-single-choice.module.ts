import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateAddSingleChoiceComponent } from './form-create-add-single-choice.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    FormCreateAddSingleChoiceComponent
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
    FormCreateAddSingleChoiceComponent
  ]
})
export class FormCreateAddSingleChoiceModule { }
