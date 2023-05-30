import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-example-rate-delivery',
  templateUrl: './example-rate-delivery.component.html',
  styleUrls: ['./example-rate-delivery.component.scss']
})
export class ExampleRateDeliveryComponent implements OnInit {
  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string
  didYouEndAnswering?:boolean
  constructor(public allFormsManagementService: AllFormsManagementService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.didYouEndAnswering=false
    this.allFormsManagementService.didYouEndAnswering = this.didYouEndAnswering
    this.titleForm = this.allFormsManagementService.exampleRateDelivery.title
    this.descriptionForm = this.allFormsManagementService.exampleRateDelivery.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleRateDelivery.questions
  }






}
