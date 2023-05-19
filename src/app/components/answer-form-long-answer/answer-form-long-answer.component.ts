import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-long-answer',
  templateUrl: './answer-form-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-long-answer.component.scss']
})
export class AnswerFormLongAnswerComponent implements OnInit{
 
  constructor(){}


  // najpewnie to będzie zmienna typu input
 @Input() index!: number
 @Input() listOfQuestionToShow!: OneQuestion
  
 question!:string



  ngOnInit() {
    console.log(this.listOfQuestionToShow)
    console.log(this.index)
    this.question = this.listOfQuestionToShow.question
  }


}
