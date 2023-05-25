import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneAnswersPreviewPersonalQuestionnaireComponent } from './done-answers-preview-personal-questionnaire.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DoneAnswersPreviewPersonalQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    DoneAnswersPreviewPersonalQuestionnaireComponent
  ]
})
export class DoneAnswersPreviewPersonalQuestionnaireModule { }
