import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePersonalQuestionnairePageComponent } from './generate-personal-questionnaire-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PreviewPersonalQuestionnaireModule } from 'src/app/components/preview-personal-questionnaire/preview-personal-questionnaire.module';
import { PanelToCreatePersonalQuestionnaireModule } from 'src/app/components/panel-to-create-personal-questionnaire/panel-to-create-personal-questionnaire.module';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: GeneratePersonalQuestionnairePageComponent }
]

@NgModule({
  declarations: [
    GeneratePersonalQuestionnairePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PreviewPersonalQuestionnaireModule,
    PanelToCreatePersonalQuestionnaireModule,
    MatIconModule
  ],
  exports: [
    GeneratePersonalQuestionnairePageComponent
  ]
})
export class GeneratePersonalQuestionnairePageModule { }
