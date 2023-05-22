import { Component, Input, OnInit } from '@angular/core';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-rate',
  templateUrl: './answer-form-rate.component.html',
  styleUrls: ['../../../style/style-of-answers.scss','./answer-form-rate.component.scss']
})
export class AnswerFormRateComponent implements OnInit{


  @Input() index!: number
  @Input() listOfQuestionToShow!: OneQuestion
   
  question!:string
 
 
 
   ngOnInit() {
     console.log(this.listOfQuestionToShow)
     console.log(this.index)
     this.question = this.listOfQuestionToShow.question
   }


}
