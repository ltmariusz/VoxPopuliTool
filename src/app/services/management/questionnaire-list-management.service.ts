import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireListManagementService {

  questionnaireListEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getQuestionnaireList(questionnaireTitle?: string, userData?: string, questionnaireDescription?: string, isActive?: boolean|string){
    let list = [questionnaireTitle, userData, questionnaireDescription, isActive]
    console.log(isActive)
    this.questionnaireListEmit.emit(list)
  }
}
