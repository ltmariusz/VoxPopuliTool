import { Component, OnInit } from '@angular/core';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-done-answers-preview-personal-questionnaire',
  templateUrl: './done-answers-preview-personal-questionnaire.component.html',
  styleUrls: ['./done-answers-preview-personal-questionnaire.component.scss']
})
export class DoneAnswersPreviewPersonalQuestionnaireComponent implements OnInit{

  answers?: any

  alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','X','Y','Z'
  ]

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
