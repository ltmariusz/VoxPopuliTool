import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './auth.service';
import { OneQuestion } from './management/create-forms-management.service';

export interface QuestionnaireList {
  id: number,
  title: string,
  description: string,
  creatorId: number,
  questionnaireType: string,
  isPublic: boolean,
  isActive: boolean,
  isComplete?: boolean,
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
  questionType: number,
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

export interface PostAnswers {
  questionId: number,
  answerIds?: Array<any> | null,
  value?: string | null,
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

export interface NewQuestionnaireContactList{
  contactType: string,
  value: string
}

export interface StatsList{
  questionId: number,
  answerList?: Array<AnswerList>,
  rating?: Rating,
  textList: Array<string>
}

export interface AnswerList{
  answerVariantId: number,
  answerSum: number
}

export interface Rating{
  averageRating: number,
  ratingList: Array<RatingList>
}

export interface RatingList{
  value: number,
  count: number
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

  //------------------------------------------------------------------------//

  getAnkietaIdStats(id: number, metadataKey: string|null, metadataValue: string|null): Observable<HttpResponse<Array<StatsList>>> {
    
    let param = new HttpParams();

    if (metadataKey) {
      param = param.append('metadataKey', metadataKey)
    }
    if (metadataValue) {
      param = param.append('metadataValue', metadataValue)
    }
    
    return this.http.get<Array<StatsList>>(this.PATH + `/${id}/stats`, {
      observe: 'response',
      responseType: 'json',
      params: param
    })
  }

  //------------------------------------------------------------------------//

  getPublicAnkietaUuid(
    uuid: string
  ): Observable<HttpResponse<PublicForm>> {
    return this.http.get<PublicForm>( `/api/v1/public/ankieta/${uuid}`, {
      observe: 'response',
      responseType: 'json'
    })
  }

  //------------------------------------------------------------------------//

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
    questionList: Array<OneQuestion>
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
    body: Array<PostAnswers>
  ): Observable<HttpResponse<Message>> {
    console.log(body)
    return this.http.post<Message>(`/api/v1/public/ankieta/${uuid}/answer`, body, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postAnkietaIdContact(id: number, body: Array<NewQuestionnaireContactList>): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/${id}/contact`, body, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // PUT PUT PUT PUT PUT PUT PUT PUTPUT PUT PUT PUTPUT PUT PUT PUTPUT PUT  //
  //------------------------------------------------------------------------//

  putAnkietaIdDeactivate(id: number): Observable<HttpResponse<Message>> {
    return this.http.put<Message>(this.PATH + `/${id}/deactivate`,{
      
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//



}
