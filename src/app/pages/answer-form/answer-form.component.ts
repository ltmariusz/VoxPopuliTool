import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  constructor(private allFormsManagementService: AllFormsManagementService,
    private route: ActivatedRoute) { }

  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string


  ngOnInit() {
    // console.log(this.allFormsManagementService.exampleOfForm2)
    this.titleForm = this.allFormsManagementService.exampleOfForm2.title
    this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm2.questions
  
    this.route.paramMap.subscribe(params => {
      let formFromUrl = params.get('id');
      console.log(formFromUrl)
      if(formFromUrl=="exampleRateDelivery"){
        this.titleForm = this.allFormsManagementService.exampleRateDelivery.title
        this.descriptionForm = this.allFormsManagementService.exampleRateDelivery.description
        this.listOfQuestionToShow = this.allFormsManagementService.exampleRateDelivery.questions
      }
      if(formFromUrl=="exampleRateVisit"){
        this.titleForm = this.allFormsManagementService.exampleRateVisit.title
        this.descriptionForm = this.allFormsManagementService.exampleRateVisit.description
        this.listOfQuestionToShow = this.allFormsManagementService.exampleRateVisit.questions
      }
      // Wykonaj operacje na myVariable
    });
  
  }

}