import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelToSendGlobalQuestionnaireComponent } from './panel-to-send-global-questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    PanelToSendGlobalQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PanelToSendGlobalQuestionnaireComponent
  ]
})
export class PanelToSendGlobalQuestionnaireModule { }
