import { Component, Input, OnInit } from '@angular/core';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-single-choice',
  templateUrl: './answer-form-single-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss','./answer-form-single-choice.component.scss']
})
export class AnswerFormSingleChoiceComponent implements OnInit{
 
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
