import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendGlobalQuestionnairePageComponent } from './send-global-questionnaire-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PreviewPersonalQuestionnaireModule } from 'src/app/components/preview-personal-questionnaire/preview-personal-questionnaire.module';

const routes: Routes = [
  { path: '', component: SendGlobalQuestionnairePageComponent }
]

@NgModule({
  declarations: [
    SendGlobalQuestionnairePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    PreviewPersonalQuestionnaireModule
  ]
})
export class SendGlobalQuestionnairePageModule { }
