import { Component } from '@angular/core';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-generate-personal-questionnaire-page',
  templateUrl: './generate-personal-questionnaire-page.component.html',
  styleUrls: ['./generate-personal-questionnaire-page.component.scss']
})
export class GeneratePersonalQuestionnairePageComponent {

  constructor(
    private questionnaireListManager: QuestionnaireListManagementService
  ) { }

  postQuestionnairePrivate(){
    this.questionnaireListManager.postQuestionnairePrivate()
  }

}
