import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private PATH = '/api/v1/public'

  constructor(
    private http: HttpClient
  ) { }

  //------------------------------------------------------------------------//
  // POST POST POST POST POST POST POST POST POST POST POST POST POST POST  //
  //------------------------------------------------------------------------//

  postRemindPassword(email: string): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/user/remindPassword`, {
      email: email,
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postResetPassword(resetCode: string, newPassword: string): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/user/resetPassword`, {
      resetCode: resetCode,
      newPassword: newPassword
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//

  postActivate(activationCode: string, newPassword: string): Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.PATH + `/user/activate`, {
      activationCode: activationCode,
      newPassword: newPassword
    }, {
      observe: 'response',
      responseType: 'json',
    })
  }

  //------------------------------------------------------------------------//
  
}
