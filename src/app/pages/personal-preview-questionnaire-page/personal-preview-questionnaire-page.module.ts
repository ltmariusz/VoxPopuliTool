import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPreviewQuestionnairePageComponent } from './personal-preview-questionnaire-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonalPreviewQuestionnairePageComponent }
]

@NgModule({
  declarations: [
    PersonalPreviewQuestionnairePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PersonalPreviewQuestionnairePageComponent
  ]
})
export class PersonalPreviewQuestionnairePageModule { }
