import { Component, OnInit } from '@angular/core';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-done-answers-preview-personal-questionnaire',
  templateUrl: './done-answers-preview-personal-questionnaire.component.html',
  styleUrls: ['./done-answers-preview-personal-questionnaire.component.scss']
})
export class DoneAnswersPreviewPersonalQuestionnaireComponent implements OnInit{

  answers?: any

  constructor(
    public allFormsManagementService: AllFormsManagementService
  ) { }

  ngOnInit(): void {
    this.getDoneAnswers()
  }

  getDoneAnswers(){
    this.answers = this.allFormsManagementService.exampleDoneAnswerForm
    console.log(this.answers)
  }

}
