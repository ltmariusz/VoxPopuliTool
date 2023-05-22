import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-rate',
  templateUrl: './answer-form-rate.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-rate.component.scss']
})
export class AnswerFormRateComponent implements OnInit {

  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb: FormBuilder) { }

  @Input() index!: number
  @Input() listOfQuestionToShow!: OneQuestion

  question!: string
  rateAnswerForm!: FormGroup


  ngOnInit() {
    this.rateAnswerForm = this.fb.group({
      rateInput: ['', Validators.required]
    })

    //  console.log(this.listOfQuestionToShow)
    //  console.log(this.index)
    this.question = this.listOfQuestionToShow.question
    this.getRateAnswer()

  }

  getRateAnswer() {
    this.allFormsManagementService.getAllAnswerEmitter.subscribe(res => {
      this.rateAnswerForm.get('rateInput')!.value
      this.allFormsManagementService.allAnswersFromOneForm.answers.push({question:this.question,answer:this.rateAnswerForm.get('rateInput')!.value})
    })
  }


}
