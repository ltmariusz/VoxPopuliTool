import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message{
  message: string
}

export interface CreatePola{
  nazwa: string,
  typ: number,
  opcje: string
}

export interface Form{
  name: string,
  idCreator: number,
  description: string,
  timeStart: string,
  timeEnd: string,
  isIndividual: boolean,
  whenCreated: string 
}

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private PATH = '/api/v1'

  constructor(
    private http: HttpClient
  ) { }

  //----------------GET----------------//

  getAnkieta(id: number):Observable<HttpResponse<any>>{
    
    return this.http.get<any>(this.PATH ,{
      observe: 'response',
      responseType: 'json'
    })
  }

  getAnkiety():Observable<HttpResponse<Array<Form>>>{
    return this.http.get<Array<Form>>(this.PATH + `/ankiety`, {
      observe: 'response',
      responseType: 'json'
    })
  }
  //----------------POST----------------//

  postCreate(
    nazwa: string, 
    idTworca: number,
    czasUtworzenia: Date,
    opis: string,
    oczasOd: Date,
    oczasDo: Date,
    jestIndywidualna: boolean,
    pola?: Array<CreatePola>
    ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/create`, {
      nazwa: nazwa,
      idTworca: idTworca,
      czasUtworzenia: czasUtworzenia,
      opis: opis,
      oczasOd: oczasOd,
      oczasDo: oczasDo,
      jestIndywidualna: jestIndywidualna,
      pola: pola
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postAddRetrievers(
    email: string, 
    phone: string,
    message: string,
    type: number,
    ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/addRetrievers`, {
      email: email,
      phone: phone,
      message: message,
      type: type,
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//
}
