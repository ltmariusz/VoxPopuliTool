import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewPersonalQuestionnaireComponent } from './preview-personal-questionnaire.component';
import { AnswerFormTitleModule } from '../answer-form-title/answer-form-title.module';
import { AnswerFormLongAnswerModule } from '../answer-form-long-answer/answer-form-long-answer.module';
import { AnswerFormSingleChoiceModule } from '../answer-form-single-choice/answer-form-single-choice.module';
import { AnswerFormMultiplyChoiceModule } from '../answer-form-multiply-choice/answer-form-multiply-choice.module';
import { AnswerFormRateModule } from '../answer-form-rate/answer-form-rate.module';
import { AnswerFormConfirmModule } from '../answer-form-confirm/answer-form-confirm.module';



@NgModule({
  declarations: [
    PreviewPersonalQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    AnswerFormTitleModule,
    AnswerFormLongAnswerModule,
    AnswerFormSingleChoiceModule,
    AnswerFormMultiplyChoiceModule,
    AnswerFormRateModule,
    AnswerFormConfirmModule
  ],
  exports: [
    PreviewPersonalQuestionnaireComponent
  ]
})
export class PreviewPersonalQuestionnaireModule { }
