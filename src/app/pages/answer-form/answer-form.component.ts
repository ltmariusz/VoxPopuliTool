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

  ngOnInit() {
    console.log(this.allFormsManagementService.exampleOfForm1)
    this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm1

  }



}