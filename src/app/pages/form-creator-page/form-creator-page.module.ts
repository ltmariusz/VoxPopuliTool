import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorPageComponent } from './form-creator-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    component: FormCreatorPageComponent
  }
]

@NgModule({
  declarations: [
    FormCreatorPageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FormCreatorPageComponent
  ]
})
export class FormCreatorPageModule { }
