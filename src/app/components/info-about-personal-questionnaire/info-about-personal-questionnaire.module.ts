import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAboutPersonalQuestionnaireComponent } from './info-about-personal-questionnaire.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    InfoAboutPersonalQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    InfoAboutPersonalQuestionnaireComponent
  ]
})
export class InfoAboutPersonalQuestionnaireModule { }
