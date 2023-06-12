import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnkietaService, QuestionList, QuestionListAll, Questionnaire } from 'src/app/services/ankieta.service';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-preview-personal-questionnaire',
  templateUrl: './preview-personal-questionnaire.component.html',
  styleUrls: ['./preview-personal-questionnaire.component.scss']
})
export class PreviewPersonalQuestionnaireComponent implements OnInit{

  idParam?: string

  subQuestionsList?: Subscription
  questionsList?: Array<QuestionListAll>
  loadingQuestionsList = false
  customErrorQuestionsList?: string

  subQuestionaire?: Subscription
  questionaire?: Questionnaire
  loadingQuestionaire = false
  customErrorQuestionaire?: string

  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private ankietaRest: AnkietaService,
    private popupService: PopupManagementService,
    private route: ActivatedRoute,
    ) { }

  listOfQuestionToShow!: Array<OneQuestion>
  titleForm!: string
  descriptionForm!: string

  ngOnInit() {
    this.checkUrl()
    // console.log(this.allFormsManagementService.exampleOfForm2)
    this.titleForm = this.allFormsManagementService.exampleOfForm2.title
    this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm2.questions

    this.emitDescription()

    this.getQuestionaire()
    this.getQuestionsList()
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  emitDescription(){
    this.allFormsManagementService.getDescriptionEmit.subscribe(res=>{
      this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    })
  }

  getQuestionaire(){
    this.loadingQuestionaire = true
    this.subQuestionaire = this.ankietaRest.getAnkietaId(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionaire = response.body
          console.log(response.body)
        }
        else{
          this.customErrorQuestionaire = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionaire)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionaire = false
        this.customErrorQuestionaire = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionaire!)
      },
      complete: () => {
        this.loadingQuestionaire = false;
      }
    })
  }

  getQuestionsList(){
    this.loadingQuestionsList = true
    this.subQuestionsList = this.ankietaRest.getAnkietaIdQuestions(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsList = response.body
          console.log(response.body)
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
  
  
}
