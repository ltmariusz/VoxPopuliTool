import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPreviewQuestionnairePageComponent } from './personal-preview-questionnaire-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DoneAnswersPreviewPersonalQuestionnaireModule } from 'src/app/components/done-answers-preview-personal-questionnaire/done-answers-preview-personal-questionnaire.module';

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
    DoneAnswersPreviewPersonalQuestionnaireModule
  ],
  exports: [
    PersonalPreviewQuestionnairePageComponent
  ]
})
export class PersonalPreviewQuestionnairePageModule { }
