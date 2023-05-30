import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormConfirmModule } from 'src/app/components/answer-form-confirm/answer-form-confirm.module';
import { AnswerFormLongAnswerModule } from 'src/app/components/answer-form-long-answer/answer-form-long-answer.module';
import { AnswerFormMultiplyChoiceModule } from 'src/app/components/answer-form-multiply-choice/answer-form-multiply-choice.module';
import { AnswerFormRateModule } from 'src/app/components/answer-form-rate/answer-form-rate.module';
import { AnswerFormSingleChoiceModule } from 'src/app/components/answer-form-single-choice/answer-form-single-choice.module';
import { AnswerFormTitleModule } from 'src/app/components/answer-form-title/answer-form-title.module';
import { ExampleRateVisitComponent } from './example-rate-visit.component';

const routes: Routes=[
  {
    path: '',
    component:ExampleRateVisitComponent
  }
]

@NgModule({
  declarations: [ExampleRateVisitComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    AnswerFormTitleModule,
    AnswerFormLongAnswerModule,
    AnswerFormSingleChoiceModule,
    AnswerFormMultiplyChoiceModule,
    AnswerFormRateModule,
    AnswerFormConfirmModule
  ],exports:[ExampleRateVisitComponent]
})
export class ExampleRateVisitModule { }
