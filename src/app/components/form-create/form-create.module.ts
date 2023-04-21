import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateComponent } from './form-create.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FormCreateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    FormCreateComponent
  ]
})
export class FormCreateModule { }
