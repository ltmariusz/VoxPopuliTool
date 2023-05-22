import { Component, Input, OnInit } from '@angular/core';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-multiply-choice',
  templateUrl: './answer-form-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss','./answer-form-multiply-choice.component.scss']
})
export class AnswerFormMultiplyChoiceComponent implements OnInit{





  @Input() index!: number
  @Input() listOfQuestionToShow!: OneQuestion
   
  question!:string
 
 
 
   ngOnInit() {
     console.log(this.listOfQuestionToShow)
     console.log(this.index)
     this.question = this.listOfQuestionToShow.question
   }

}
