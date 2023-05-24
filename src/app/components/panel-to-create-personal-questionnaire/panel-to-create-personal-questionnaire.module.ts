import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelToCreatePersonalQuestionnaireComponent } from './panel-to-create-personal-questionnaire.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PanelToCreatePersonalQuestionnaireComponent
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
    PanelToCreatePersonalQuestionnaireComponent
  ]
})
export class PanelToCreatePersonalQuestionnaireModule { }
