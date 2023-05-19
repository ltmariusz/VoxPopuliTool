import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerFormComponent } from './answer-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormTitleModule } from 'src/app/components/answer-form-title/answer-form-title.module';
import { AnswerFormLongAnswerModule } from 'src/app/components/answer-form-long-answer/answer-form-long-answer.module';
import { AnswerFormSingleChoiceModule } from 'src/app/components/answer-form-single-choice/answer-form-single-choice.module';

const routes: Routes=[
  {
    path: '',
    component:AnswerFormComponent
  }
]

@NgModule({
  declarations: [
    AnswerFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AnswerFormTitleModule,
    AnswerFormLongAnswerModule,
    AnswerFormSingleChoiceModule
  ], exports: [
    AnswerFormComponent
  ]
})
export class AnswerFormModule { }
