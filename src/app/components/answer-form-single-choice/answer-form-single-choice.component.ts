import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionListAll } from 'src/app/services/ankieta.service';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { OneQuestion } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-answer-form-single-choice',
  templateUrl: './answer-form-single-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-single-choice.component.scss']
})
export class AnswerFormSingleChoiceComponent implements OnInit {

  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb: FormBuilder) { }


  // najpewnie to będzie zmienna typu input
  @Input() index!: number
  @Input() listOfQuestionToShow!: any

  question!: string

  singleChoiceForm!: FormGroup
  singleChoiceAnswer!: string
  selectedRatio!: string
  onRatioChange() {
    console.log('Zaznaczono ratio:', this.selectedRatio)
    
    this.singleChoiceAnswer = this.selectedRatio;
  }

  ngOnInit() {
    this.singleChoiceForm = this.fb.group({

    })
    // console.log(this.listOfQuestionToShow)
    // console.log(this.index)
    this.question = this.listOfQuestionToShow.question
    console.log("!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@")
    console.log(this.listOfQuestionToShow)
    console.log(this.listOfQuestionToShow.answerVariants)
    this.getSingleChoiceAnswer()
  }

  getClick(singleChoiceShow: any) {

    // // console.log(this.listOfQuestionToShow.allAnswers)
    // if(this.listOfQuestionToShow.allAnswers!.find(element=>element==singleChoiceShow)){
    //   this.singleChoiceAnswer = singleChoiceShow
    //   console.log(this.singleChoiceAnswer + "Odpalana wewnątrz komponentu")    
    // }
  }


  getSingleChoiceAnswer() {
    this.allFormsManagementService.getAllAnswerEmitter.subscribe(res => {
      console.log("test")
      if (this.singleChoiceForm.valid) {
        console.log("wszystkie ok")
      } else {
        console.log("wszystkie zle")
      }
      console.log(this.singleChoiceAnswer)
      this.allFormsManagementService.allAnswersFromOneForm.answers.push({ question: this.listOfQuestionToShow.id, type:"SINGLE_CHOICE", answer: [this.singleChoiceAnswer], isAnswerRequired:this.listOfQuestionToShow.isAnswerRequired })

    })
  }
}
