import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './auth.service';

export interface QuestionnaireList{
  id: number,
  title: string,
  description: string,
  creatorId: number,
  type: string,
  isPublic: boolean,
  isActive: boolean,
  parentId: number,
  uniqueCode: string,
  link: string,
  createDate: string
}

export interface NewQuestionnaire{
  title: string,
  description: string,
  isPublic: boolean,
  questionList: Array<QuestionList>
}

export interface QuestionList{
  type: number,
  question: string,
  answerList: Array<string>,
  isRequired: boolean
}

export interface NewPrivateQuestionnaire{
  description: string,
  emailList: Array<string>,
  phoneNumberList: Array<string>,
  metadataList: Array<MetadataList>
}

export interface MetadataList{
  key: string,
  value: string
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
    metadataList: Array<MetadataList>
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


}
