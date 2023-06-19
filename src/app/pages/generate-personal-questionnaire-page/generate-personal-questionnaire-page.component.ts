import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-generate-personal-questionnaire-page',
  templateUrl: './generate-personal-questionnaire-page.component.html',
  styleUrls: ['./generate-personal-questionnaire-page.component.scss']
})
export class GeneratePersonalQuestionnairePageComponent {

  constructor(
    public questionnaireListManager: QuestionnaireListManagementService,
    private router: Router
  ) { }

  postQuestionnairePrivate(){
    this.questionnaireListManager.postQuestionnairePrivate()
  }

  back(){
    this.router.navigateByUrl('/home/form-list');
  }

}
