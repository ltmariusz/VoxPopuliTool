import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireListManagementService {

  loadingSendGroupQuestionnaire = false

  questionnaireListEmit: EventEmitter<any> = new EventEmitter();

  questionnairePrivateEmit: EventEmitter<any> = new EventEmitter();
  questionnaireGlobalEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getQuestionnaireList(questionnaireTitle?: string, userData?: string, questionnaireDescription?: string, isActive?: boolean|string){
    let list = [questionnaireTitle, userData, questionnaireDescription, isActive]
    console.log(isActive)
    this.questionnaireListEmit.emit(list)
  }

  postQuestionnairePrivate(){
    this.questionnairePrivateEmit.emit()
  }

  postQuestionnaireGlobal(){
    this.questionnaireGlobalEmit.emit()
  }
}
