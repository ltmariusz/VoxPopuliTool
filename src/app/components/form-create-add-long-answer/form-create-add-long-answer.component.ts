import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-long-answer',
  templateUrl: './form-create-add-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddLongAnswerComponent implements OnInit {


  constructor(private createFormsManagementService: CreateFormsManagementService,
    private fb: FormBuilder) { }

  @Input() index!: number;
  longAnswerForms!: FormGroup
  isDeleted?: boolean;
  isRequired?:boolean


  ngOnInit(): void {
    this.isDeleted = false
    this.longAnswerForms = this.fb.group({
      longAnswerQuestionInput: ['', [Validators.required]]
    })
    this.getLongAnswer()
  }
  getLongAnswer() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(res => {
      if (this.isDeleted === false) {
        this.createFormsManagementService.createdQuestionArray?.push({ questionType: "TEXT", question: this.longAnswerForms.get('longAnswerQuestionInput')?.value, isRequired:this.isRequired! });
      }
    })
  }

  isRequire(){
    this.isRequired = !this.isRequired
    console.log(this.isRequired)
  }

  deleteThisQuestion() {
    this.isDeleted = true
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
    console.log(this.index)
    this.createFormsManagementService.createdQuestionArray?.splice(this.index, 1)
    console.log(this.createFormsManagementService.createdQuestionArray)
  }
}
