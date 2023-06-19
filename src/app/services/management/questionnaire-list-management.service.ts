import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireListManagementService {

  loadingSendGroupQuestionnaire = false

  list:any = []

  lastQuestionnaireTitle?: string
  lastUserData?: string
  lastQuestionnaireDescription?: string
  lastIsActive?: boolean|string

  questionnaireListEmit: EventEmitter<any> = new EventEmitter();

  questionnairePrivateEmit: EventEmitter<any> = new EventEmitter();
  questionnaireGlobalEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getQuestionnaireList(questionnaireTitle?: string, userData?: string, questionnaireDescription?: string, isActive?: boolean|string){
    this.list = [questionnaireTitle, userData, questionnaireDescription, isActive]

    this.lastQuestionnaireTitle = questionnaireTitle
    this.lastUserData = userData
    this.lastQuestionnaireDescription =questionnaireDescription
    this.lastIsActive = isActive

    this.questionnaireListEmit.emit(this.list)
  }

  refreshQuestionnaireList(){
    let list = [this.lastQuestionnaireTitle, this.lastUserData, this.lastQuestionnaireDescription, this.lastIsActive]
    this.questionnaireListEmit.emit(list)
  }

  postQuestionnairePrivate(){
    this.questionnairePrivateEmit.emit()
  }

  postQuestionnaireGlobal(){
    this.questionnaireGlobalEmit.emit()
  }
}
