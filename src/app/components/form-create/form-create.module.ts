import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateComponent } from './form-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    FormCreateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FormCreateComponent
  ]
})
export class FormCreateModule { }
