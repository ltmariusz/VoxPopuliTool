import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './auth.service';

export interface QuestionnaireList {
  id: number,
  title: string,
  description: string,
  creatorId: number,
  questionnaireType: string,
  isPublic: boolean,
  isActive: boolean,
  parentId: number,
  uniqueCode: string,
  link: string,
  createDate: string
}

export interface FormIdQuestion {
  id: number,
  questionnaireId: number,
  questionType: string,
  isAnswerRequired: boolean,
  question: string,
  answerVariants: Array<AnswerVariants>,
  createDate: string
}
export interface AnswerVariants {
  id: number,
  questionId: number,
  answer: string,
  createDate: string
}

export interface Metadata {
  id: number,
  questionnaireId: number,
  key: string,
  value: string,
  createDate: string
}

export interface NewQuestionnaire {
  title: string,
  description: string,
  isPublic: boolean,
  questionList: Array<QuestionList>
}

export interface Contact {
  id: number,
  questionnaireId: number,
  contactType: string,
  value: string,
  createDate: string
}

export interface PublicForm {
  id: number,
  title: string,
  description: string,
  questionnaireType: string,
  createDate: string
}


export interface QuestionList {
  type: number,
  question: string,
  answerList: Array<string>,
  isRequired: boolean
}



export interface NewPrivateQuestionnaire {
  description: string,
  emailList: Array<string>,
  phoneNumberList: Array<string>,
  metadataList: Array<MetadataList>
}

export interface MetadataListCustom{
  key: string,
  value: string
}

export interface QuestionListAll{
  id: number,
  questionnaireId: number,
  questionType: string,
  isAnswerRequired: boolean,
  question: string,
  answerVariants: Array<AnswerVariants>,
  createDate: string,
  correct: any
}
export interface AnswerVariants{
  id: number,
  questionId: number,
  answer: string,
  createDate: string
}

export interface Questionnaire{
  id: number,
  title: string,
  description: string,
  creatorId: number,
  questionnaireType: string,
  isPublic: boolean,
  isActive: boolean,
  parentId: number,
  uniqueCode: string,
  link: string,
  createDate: string
}

export interface QuestionnaireContactList{
  id: number,
  questionnaireId: number,
  contactType: string,
  value: string,
  createDate: string
}

export interface MetadataList{
  id: number,
  questionnaireId: number,
  key: string,
  value: string,
  createDate: string
}


@Injectable({
  providedIn: 'root'
})
export class AnkietaService {

  private PATH = '/api/v1/ankieta'

  constructor(
    private http: HttpClient
  ) { }

  //------------------------------------------------------------------------//
  // GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET//
  //------------------------------------------------------------------------//

  getAnkieta(
    userData: string,
    questionnaireTitle?: string,
    questionnaireDescription?: string,
    isActive?: boolean
  ): Observable<HttpResponse<Array<QuestionnaireList>>> {

    let param = new HttpParams();

    if (userData) {
      param = param.append('userData', userData)
    }
    if (questionnaireTitle) {
      param = param.append('questionnaireTitle', questionnaireTitle)
    }
    if (questionnaireDescription) {
      param = param.append('questionnaireDescription', questionnaireDescription)
    }
    if (isActive != null) {
      param = param.append('isActive', isActive!)
    }

    return this.http.get<Array<QuestionnaireList>>(this.PATH, {
      observe: 'response',
      responseType: 'json',
      params: param,
    })
  }
  //------------------------------------------------------------------------//

  getAnkietaId(id: number): Observable<HttpResponse<Questionnaire>> {
    return this.http.get<Questionnaire>(this.PATH + `/${id}`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  //------------------------------------------------------------------------//

  getAnkietaIdQuestions(id: number): Observable<HttpResponse<Array<QuestionListAll>>> {
    return this.http.get<Array<QuestionListAll>>(this.PATH + `/${id}/questions`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  //------------------------------------------------------------------------//

  getAnkietaIdContact(id: number): Observable<HttpResponse<Array<QuestionnaireContactList>>> {
    return this.http.get<Array<QuestionnaireContactList>>(this.PATH + `/${id}/contact`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  //------------------------------------------------------------------------//

  getAnkietaIdMetadata(id: number): Observable<HttpResponse<Array<MetadataList>>> {
    return this.http.get<Array<MetadataList>>(this.PATH + `/${id}/metadata`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  getPublicAnkietaUuid(
    uuid: string
  ): Observable<HttpResponse<PublicForm>> {
    return this.http.get<PublicForm>( `/api/v1/public/ankieta/${uuid}`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  getPublicAnkietaUuidQuestion(
    uuid: string
  ): Observable<HttpResponse<Array<FormIdQuestion>>> {
    return this.http.get<Array<FormIdQuestion>>( `/api/v1/public/ankieta/${uuid}/questions`, {
      observe: 'response',
      responseType: 'json'
    })
  }
  

  //------------------------------------------------------------------------//
  // POST POST POST POST POST POST POST POST POST POST POST POST POST POST  //
  //------------------------------------------------------------------------//

  postAnkieta(
    title: string,
    description: string,
    isPublic: boolean,
    questionList: Array<QuestionList>
  ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH, {
      title: title,
      description: description,
      isPublic: isPublic,
      questionList: questionList
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postAnkietaPrivate(
    global_questionnaire_id: number,
    description: string,
    emailList: Array<string>,
    phoneNumberList: Array<string>,
    metadataList: Array<MetadataListCustom>
    ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/${global_questionnaire_id}/private`, {
      description: description,
      emailList: emailList,
      phoneNumberList: phoneNumberList,
      metadataList: metadataList
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postAnkietaPublicUuidAnswer(
    uuid: string,
    questionId: string,
    answerIds: Array<number>,
    value: string
  ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/api/v1/ankieta/public/ankieta/${uuid}/answer`, {
      questionId: questionId,
      answerIds: answerIds,
      value: value,
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

}