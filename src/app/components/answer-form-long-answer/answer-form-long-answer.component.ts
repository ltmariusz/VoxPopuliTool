import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-long-answer',
  templateUrl: './answer-form-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-long-answer.component.scss']
})
export class AnswerFormLongAnswerComponent implements OnInit{
 
  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb:FormBuilder
    ){}

  // najpewnie to będzie zmienna typu input
 @Input() index!: number
 @Input() listOfQuestionToShow!: any
  
 question!:string

    longAnswerForm!:FormGroup

  ngOnInit() {
    this.longAnswerForm = this.fb.group({
      textInput: ['',[Validators.required]]
    })

    this.question = this.listOfQuestionToShow.question
    this.getLongAnswer()
  }

  getLongAnswer(){
    this.allFormsManagementService.getAllAnswerEmitter.subscribe(res=>{
      this.longAnswerForm.get('textInput')!.value
      this.allFormsManagementService.allAnswersFromOneForm.answers.push({question:this.question,answer:[this.longAnswerForm.get('textInput')!.value]})
    })
  }
}
