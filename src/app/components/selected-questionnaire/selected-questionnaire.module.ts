import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedQuestionnaireComponent } from './selected-questionnaire.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: SelectedQuestionnaireComponent }
]

@NgModule({
  declarations: [
    SelectedQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  exports: [
    SelectedQuestionnaireComponent
  ]
})
export class SelectedQuestionnaireModule { }
