import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

export interface ChosenOrNotMultipleChoice {
  answer: string,
  checked: boolean
}

@Component({
  selector: 'app-answer-form-multiply-choice',
  templateUrl: './answer-form-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-multiply-choice.component.scss']
})
export class AnswerFormMultiplyChoiceComponent implements OnInit {


  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb: FormBuilder) { }


  @Input() index!: number
  @Input() listOfQuestionToShow!: any

  question!: string
  howMuchAnswers!: number
  chosenOrNot!: Array<ChosenOrNotMultipleChoice>

  multipleChoiceAnswers: Array<string> = new Array

  tymczasowa!: any

  ngOnInit() {
    //  console.log(this.listOfQuestionToShow)
    //  console.log(this.index)
    this.chosenOrNot = new Array
    this.howMuchAnswers = this.listOfQuestionToShow.answerVariants!.length
    for (let i = 0; i < this.howMuchAnswers; i++) {
      const element = this.listOfQuestionToShow.answerVariants![i].answer;
      this.chosenOrNot.push({ answer: element, checked: false })
    }
    this.question = this.listOfQuestionToShow.question
    this.getMultipleChoice()
  }

  showAnswers() {
    for (const item of this.chosenOrNot) {
      if (item.checked) {
        console.log(`Zmienna ${item.answer} została wybrana.`);
      }
    }
  }



  // clickOnCheckbox(whichIsClick: any) {
  //   this.chosenOrNot.find(element => element.answer==whichIsClick)!.checked=!this.chosenOrNot.find(element => element.answer==whichIsClick)?.checked
  //       // console.log(whichIsClick)
  //   console.log(this.chosenOrNot)
  // }
  getMultipleChoice() {
    this.allFormsManagementService.getAllAnswerEmitter.subscribe(res => {
      for (const item of this.chosenOrNot) {
        if (item.checked) {
          this.multipleChoiceAnswers.push(item.answer)
        }
      }
      this.allFormsManagementService.allAnswersFromOneForm.answers.push({ question: this.question, answer: this.multipleChoiceAnswers })
    })
  }
}
