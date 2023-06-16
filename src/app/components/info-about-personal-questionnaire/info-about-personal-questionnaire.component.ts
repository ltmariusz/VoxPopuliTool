import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnkietaService, MetadataList, Questionnaire, QuestionnaireContactList } from 'src/app/services/ankieta.service';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-info-about-personal-questionnaire',
  templateUrl: './info-about-personal-questionnaire.component.html',
  styleUrls: ['./info-about-personal-questionnaire.component.scss']
})
export class InfoAboutPersonalQuestionnaireComponent implements OnInit{

  answers?: any
  idParam?: string

  subQuestionsContact?: Subscription
  loadingQuestionsContact = false
  questionsContact?: Array<QuestionnaireContactList>
  customErrorQuestionsContact?: string

  subQuestionaire?: Subscription
  questionaire?: Questionnaire
  loadingQuestionaire = false
  customErrorQuestionaire?: string

  subQuestionsMetadate?: Subscription
  questionsMetadate?: Array<MetadataList>
  loadingQuestionsMetadate = false
  customErrorQuestionsMetadate?: string

  link?: string

  constructor(
    public allFormsManagementService: AllFormsManagementService,
    private ankietaRest: AnkietaService,
    private route: ActivatedRoute,
    private popupService: PopupManagementService,
  ) { }

  ngOnInit(): void {
    this.checkUrl()
    this.getQuestionsContact()
    this.getQuestionaire()
    this.getQuestionsMetadate()
    this.answers = this.allFormsManagementService.exampleDoneAnswerForm
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  copyLink(){
    navigator.clipboard.writeText(this.link!);
    // alert("Skopiowano: " + this.link)
  }

  getQuestionaire(){
    this.loadingQuestionaire = true
    this.subQuestionaire = this.ankietaRest.getAnkietaId(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionaire = response.body
          console.log(response.body)
          this.link = `${this.questionaire.link}`
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

  getQuestionsContact(){
    this.loadingQuestionsContact = true
    this.subQuestionsContact = this.ankietaRest.getAnkietaIdContact(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsContact = response.body
          // console.log(response.body)
        }
        else{
          this.customErrorQuestionsContact = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsContact)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsContact = false
        this.customErrorQuestionsContact = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsContact!)
      },
      complete: () => {
        this.loadingQuestionsContact = false;
      }
    })
  }

  getQuestionsMetadate(){
    this.loadingQuestionsMetadate = true
    this.subQuestionsMetadate = this.ankietaRest.getAnkietaIdMetadata(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsMetadate = response.body
          console.log(response.body)
        }
        else{
          this.customErrorQuestionsMetadate = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsMetadate)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsMetadate = false
        this.customErrorQuestionsMetadate = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsMetadate!)
      },
      complete: () => {
        this.loadingQuestionsMetadate = false;
      }
    })
  }

}
