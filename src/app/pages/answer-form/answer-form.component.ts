import { Component, OnInit } from '@angular/core';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  constructor(private allFormsManagementService: AllFormsManagementService) { }

  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string

  ngOnInit() {
    // console.log(this.allFormsManagementService.exampleOfForm2)
    this.titleForm = this.allFormsManagementService.exampleOfForm2.title
    this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm2.questions
  }



}