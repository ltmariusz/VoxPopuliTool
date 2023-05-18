import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-long-answer',
  templateUrl: './form-create-add-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddLongAnswerComponent implements OnInit{
  
  
  constructor(private createFormsManagementService: CreateFormsManagementService,
    private fb: FormBuilder){}
  
  @Input() index!: number;
  longAnswerForms!: FormGroup

  ngOnInit(): void {
    this.longAnswerForms = this.fb.group({
      longAnswerQuestionInput: ['',[Validators.required]]
    })
    this.getLongAnswer()
  }
  getLongAnswer(){
    this.createFormsManagementService.getAllFormsEmitter.subscribe(res=>{
      this.createFormsManagementService.createdQuestionArray?.push({question:this.longAnswerForms.get('longAnswerQuestionInput')?.value});
    })
  }

  deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
  }
}
