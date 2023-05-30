import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRateDeliveryComponent } from './example-rate-delivery.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormConfirmModule } from 'src/app/components/answer-form-confirm/answer-form-confirm.module';
import { AnswerFormLongAnswerModule } from 'src/app/components/answer-form-long-answer/answer-form-long-answer.module';
import { AnswerFormMultiplyChoiceModule } from 'src/app/components/answer-form-multiply-choice/answer-form-multiply-choice.module';
import { AnswerFormRateModule } from 'src/app/components/answer-form-rate/answer-form-rate.module';
import { AnswerFormSingleChoiceModule } from 'src/app/components/answer-form-single-choice/answer-form-single-choice.module';
import { AnswerFormTitleModule } from 'src/app/components/answer-form-title/answer-form-title.module';

const routes: Routes=[
  {
    path: '',
    component:ExampleRateDeliveryComponent
  }
]

@NgModule({
  declarations: [ExampleRateDeliveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AnswerFormTitleModule,
    AnswerFormLongAnswerModule,
    AnswerFormSingleChoiceModule,
    AnswerFormMultiplyChoiceModule,
    AnswerFormRateModule,
    AnswerFormConfirmModule
  ],exports:[
    ExampleRateDeliveryComponent
  ]
})
export class ExampleRateDeliveryModule { }
