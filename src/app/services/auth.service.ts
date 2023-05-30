import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message{
  message: string
}

// export interface Register{
//   name: string,
//   email: string
// }

// export interface Activate{
//   password: string
// }

// export interface ChangeAccountStatus{
//   status: string,
//   userId: number
// }

// export interface ChangeAccountPassword{
//   password: string,
//   userId: number
// }

export interface Login{
  email: string,
  password: string
}

export interface User{
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private PATH = '/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  //------------------------------------------------------------------------//
  // GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET//
  //------------------------------------------------------------------------//

  // getUser():Observable<HttpResponse<User>>{
  //   return this.http.get<User>(this.PATH ,{
  //     observe: 'response',
  //     responseType: 'json'
  //   })
  // }

  //------------------------------------------------------------------------//
  // POST POST POST POST POST POST POST POST POST POST POST POST POST POST  //
  //------------------------------------------------------------------------//

  // postRegister(name: string, email: string): Observable<HttpResponse<Message>> {
  //   return this.http.post<Message>(this.PATH + `/register`, {
  //     name: name,
  //     email: email
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //   })
  // }

  //------------------------------------------------------------------------//

  // postActivate(password: string, activationCode: string): Observable<HttpResponse<Message>> {
  //   let param = new HttpParams()
  //   if(activationCode){
  //         param = param.append('activationCode', activationCode)
  //       }
  //   return this.http.post<Message>(this.PATH + `/activate`, {
  //     password: password
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //     params: param,
  //   })
  // }

  //------------------------------------------------------------------------//

  // postChangeAccountStatus(status: string, userId: number): Observable<HttpResponse<Message>> {
  //   return this.http.post<Message>(this.PATH + `/changeAccountStatus`, {
  //     status: status,
  //     userId: userId
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //   })
  // }

  //------------------------------------------------------------------------//

  // postChangeAccountPassword(password: string, userId: number): Observable<HttpResponse<Message>> {
  //   return this.http.post<Message>(this.PATH + `/changeAccountPassword`, {
  //     password: password,
  //     userId: userId
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //   })
  // }

  //------------------------------------------------------------------------//

  postLogin(email: string, password: string): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/login`, {
      email: email,
      password: password
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  // postChangePassword(): Observable<HttpResponse<Message>> {
  //   return this.http.post<Message>(this.PATH + `/changePassword`, {
  //     password: password
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //   })
  // }

  //------------------------------------------------------------------------//

  // postLogout(): Observable<HttpResponse<Message>> {
  //   return this.http.post<Message>(this.PATH + `/logout`, {
  //   }, {
  //     observe: 'response',
  //     responseType: 'json',
  //   })
  // }

  //------------------------------------------------------------------------//


}
