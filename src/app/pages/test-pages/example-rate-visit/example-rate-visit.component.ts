import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-example-rate-visit',
  templateUrl: './example-rate-visit.component.html',
  styleUrls: ['./example-rate-visit.component.scss']
})
export class ExampleRateVisitComponent implements OnInit {
  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string
  didYouEndAnswering?: boolean

  constructor(public allFormsManagementService: AllFormsManagementService,
    private route: ActivatedRoute,
    ) { }
  ngOnInit() {


    this.didYouEndAnswering=false
    this.allFormsManagementService.didYouEndAnswering = this.didYouEndAnswering
    this.titleForm = this.allFormsManagementService.exampleRateVisit.title
    this.descriptionForm = this.allFormsManagementService.exampleRateVisit.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleRateVisit.questions
    console.log(this.listOfQuestionToShow)
    if(this.titleForm ===undefined || this.descriptionForm===undefined){
      console.log("undefined")
    }
  }
}
