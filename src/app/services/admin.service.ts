import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './auth.service';

export interface User{
  id: number,
  name: string,
  surname: string,
  email: string,
  role: string,
  phoneNumber: string,
  position: string,
  isActive: boolean,
  archived: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private PATH = '/api/v1/admin'

  constructor(
    private http: HttpClient
  ) { }
  //------------------------------------------------------------------------//
  // GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET//
  //------------------------------------------------------------------------//

  getUsers(): Observable<HttpResponse<Array<User>>> {
    return this.http.get<Array<User>>(this.PATH + `/users`, {
      observe: 'response',
      responseType: 'json',
    })
  }
  //------------------------------------------------------------------------//
  // POST POST POST POST POST POST POST POST POST POST POST POST POST POST  //
  //------------------------------------------------------------------------//

  postUserCreate(
     name: string,
     surname: string,
     email: string,
     role: string,
     phoneNumber: number,
     position: string,
     ): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/user/create`, {
      name: name,
      surname: surname,
      email: email,
      role: role,
      phoneNumber: phoneNumber,
      position: position
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT PUT//
  //------------------------------------------------------------------------//

  putUserActivete(id: number): Observable<HttpResponse<Message>> {
    return this.http.put<Message>(this.PATH + `/user/${id}/activate`, {

    }, {
      observe: 'response',
      responseType: 'json',
    })
  }
  
  //------------------------------------------------------------------------//

  putUserChangeRole(id: number): Observable<HttpResponse<Message>> {
    return this.http.put<Message>(this.PATH + `/user/${id}/changeRole`, {

    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  putUserDeactivate(id: number): Observable<HttpResponse<Message>> {
    return this.http.put<Message>(this.PATH + `/user/${id}/deactivate`, {

    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  putUserChangePassword(id: number): Observable<HttpResponse<Message>> {
    return this.http.put<Message>(this.PATH + `/user/${id}/changePassword`, {

    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//
  
}
