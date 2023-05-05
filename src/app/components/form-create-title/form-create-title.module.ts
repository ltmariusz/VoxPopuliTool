import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateTitleComponent } from './form-create-title.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    FormCreateTitleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FormCreateTitleComponent
  ]
})
export class FormCreateTitleModule { }
