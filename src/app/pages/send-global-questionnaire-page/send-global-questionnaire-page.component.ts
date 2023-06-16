import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-send-global-questionnaire-page',
  templateUrl: './send-global-questionnaire-page.component.html',
  styleUrls: ['./send-global-questionnaire-page.component.scss']
})
export class SendGlobalQuestionnairePageComponent implements OnInit{

  constructor(
    private questionnaireListManager: QuestionnaireListManagementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  postSendQuestionnaireGlobal(){
    this.questionnaireListManager.postQuestionnaireGlobal()
  }

  back(){
    this.router.navigateByUrl('/home/form-list');
  }

}
