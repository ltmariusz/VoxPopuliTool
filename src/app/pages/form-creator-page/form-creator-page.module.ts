import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorPageComponent } from './form-creator-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateTitleModule } from 'src/app/components/form-create-title/form-create-title.module';
import { MatIconModule } from '@angular/material/icon';
import { FormCreateAddQuestionModule } from 'src/app/components/form-create-add-question/form-create-add-question.module';
import { FormCreateAddSingleChoiceModule } from 'src/app/components/form-create-add-single-choice/form-create-add-single-choice.module';
import { FormCreateAddMultiplyChoiceModule } from 'src/app/components/form-create-add-multiply-choice/form-create-add-multiply-choice.module';
import { FormCreateAddLongAnswerModule } from 'src/app/components/form-create-add-long-answer/form-create-add-long-answer.module';
import { FormCreateAddRateModule } from 'src/app/components/form-create-add-rate/form-create-add-rate.module';
import { AnswerFormTitleModule } from 'src/app/components/answer-form-title/answer-form-title.module';


const routes: Routes = [
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
    FormCreateTitleModule,
    FormCreateAddQuestionModule,
    FormCreateAddSingleChoiceModule,
    FormCreateAddMultiplyChoiceModule,
    FormCreateAddLongAnswerModule,
    FormCreateAddRateModule,
    MatIconModule,
    AnswerFormTitleModule
  ],
  exports: [
    FormCreatorPageComponent
  ]
})
export class FormCreatorPageModule { }
