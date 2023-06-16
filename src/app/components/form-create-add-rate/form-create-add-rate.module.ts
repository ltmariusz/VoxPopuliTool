import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateAddRateComponent } from './form-create-add-rate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    FormCreateAddRateComponent
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
    FormCreateAddRateComponent
  ]
})
export class FormCreateAddRateModule { }
