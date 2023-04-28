import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListPageComponent } from './form-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormListPageComponent }
]

@NgModule({
  declarations: [
    FormListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    FormListPageComponent
  ]
})
export class FormListPageModule { }
