import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListPageComponent } from './form-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnairesListModule } from 'src/app/components/questionnaires-list/questionnaires-list.module';

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
    QuestionnairesListModule
  ],
  exports:[
    FormListPageComponent
  ]
})
export class FormListPageModule { }
