import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-long-answer',
  templateUrl: './form-create-add-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddLongAnswerComponent implements OnInit{
  
  
  constructor(private createFormsManagementService: CreateFormsManagementService){}
  
  @Input() index!: number;
  
  longAnswerForms = new FormGroup({
    longAnswerQuestionInput: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {


  }
  
  deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
  }
}
