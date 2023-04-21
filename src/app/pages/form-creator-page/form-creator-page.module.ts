import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorPageComponent } from './form-creator-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateModule } from 'src/app/components/form-create/form-create.module';

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
    FormCreateModule
  ],
  exports: [
    FormCreatorPageComponent
  ]
})
export class FormCreatorPageModule { }
