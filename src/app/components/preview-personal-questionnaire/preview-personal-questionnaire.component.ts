import { Component } from '@angular/core';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-preview-personal-questionnaire',
  templateUrl: './preview-personal-questionnaire.component.html',
  styleUrls: ['./preview-personal-questionnaire.component.scss']
})
export class PreviewPersonalQuestionnaireComponent {

  constructor(private allFormsManagementService: AllFormsManagementService) { }

  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string

  ngOnInit() {
    // console.log(this.allFormsManagementService.exampleOfForm2)
    this.titleForm = this.allFormsManagementService.exampleOfForm2.title
    this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm2.questions
    this.emitDescription()
  }

  emitDescription(){
    this.allFormsManagementService.getDescriptionEmit.subscribe(res=>{
      this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    })
  }
  
}
