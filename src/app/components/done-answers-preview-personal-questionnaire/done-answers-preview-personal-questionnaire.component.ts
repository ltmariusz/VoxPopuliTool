import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnkietaService, QuestionListAll, StatsList } from 'src/app/services/ankieta.service';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-done-answers-preview-personal-questionnaire',
  templateUrl: './done-answers-preview-personal-questionnaire.component.html',
  styleUrls: ['./done-answers-preview-personal-questionnaire.component.scss']
})
export class DoneAnswersPreviewPersonalQuestionnaireComponent implements OnInit{

  answers?: any

  alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','X','Y','Z'
  ]

  idParam?: string

  subQuestionsList?: Subscription
  questionsList?: Array<QuestionListAll>
  loadingQuestionsList = false
  customErrorQuestionsList?: string

  subQuestionsStats?: Subscription
  questionsStats?: Array<StatsList>
  loadingQuestionsStats = false
  customErrorQuestionsStats?: string

  constructor(
    public allFormsManagementService: AllFormsManagementService,
    private ankietaRest: AnkietaService,
    private popupService: PopupManagementService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.checkUrl()
    this.getDoneAnswers()
    this.getQuestionsList()
    this.getQuestionsStats()
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  getDoneAnswers(){
    this.answers = this.allFormsManagementService.exampleDoneAnswerForm
  }

  checkValueAnswer(answer: string|number|any|null, indexAnswer: number): any{
    // let result: boolean
    // for (let index = 0; index < answer.correct!.length; index++) {
    //   if (indexAnswer == answer.correct![index]) {
    //     return true
    //   }
    // }
  }

  getQuestionsList(){
    this.loadingQuestionsList = true
    this.subQuestionsList = this.ankietaRest.getAnkietaIdQuestions(Number(this.idParam)!).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsList = response.body
          console.log(response.body)
          this.addAnswer()
        }
        else{
          this.customErrorQuestionsList = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsList)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsList = false
        this.customErrorQuestionsList = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsList!)
      },
      complete: () => {
        this.loadingQuestionsList = false;
      }
    })
  }

  getQuestionsStats(){
    this.loadingQuestionsStats = true
    this.subQuestionsStats = this.ankietaRest.getAnkietaIdStats(Number(this.idParam), null, null).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsStats = response.body
          console.log(response.body)
          this.loadAnswersTextAndRate()
        }
        else{
          this.customErrorQuestionsStats = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsStats)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsStats = false
        this.customErrorQuestionsStats = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsStats!)
      },
      complete: () => {
        this.loadingQuestionsStats = false;
      }
    })
  }

  loadAnswersTextAndRate(){
    for (let index = 0; index < this.questionsStats!.length; index++) {
      if (this.questionsStats![index].answerList) {
        this.questionsList![index].correct = null
      }
      if (this.questionsStats![index].textList) {
        this.questionsList![index].correct = [this.questionsStats![index].textList]  
      }
      if (this.questionsStats![index].rating) {
        this.questionsList![index].correct = this.questionsStats![index].rating?.averageRating
      }
    }
    console.log(this.questionsList)
  }

  addAnswer(){
    this.questionsList![0].correct = [0, 1]
    this.questionsList![1].correct = [1]
    this.questionsList![2].correct = ['test odpowiedzi']
    this.questionsList![3].correct = [4]
  }

}
