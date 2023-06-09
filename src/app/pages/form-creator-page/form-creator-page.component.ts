import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateFormsManagementService, Question } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-creator-page',
  templateUrl: './form-creator-page.component.html',
  styleUrls: ['./form-creator-page.component.scss']
})
export class FormCreatorPageComponent implements OnDestroy, OnInit{

constructor(public createFormsManagementService: CreateFormsManagementService){ }
  ngOnDestroy(){
    this.createFormsManagementService.listOfCreatingForms = new Array()
    this.createFormsManagementService.indexOfCreatingForms = 0

  }
  ngOnInit(){
    this.createFormsManagementService.clickedDone = false
  }
  submitForms(){
    
    this.createFormsManagementService.submitForms()
  }

  // list:Array<any> = [1,2]
list:Array<Question> = this.createFormsManagementService.listOfCreatingForms 
conditionExpression = this.createFormsManagementService.switchWitchComponentAdd
}
