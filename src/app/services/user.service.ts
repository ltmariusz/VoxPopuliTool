import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  id: number,
  name: string,
  surname: string,
  email: string,
  role: string,
  phoneNumber: string,
  position: string,
  isActive: boolean,
  archived: boolean,
  createDate: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private PATH = '/api/v1/user'

  constructor(
    private http: HttpClient
  ) { }

  //------------------------------------------------------------------------//
  // GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET GET//
  //------------------------------------------------------------------------//

  getUser(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.PATH, {
      observe: 'response',
      responseType: 'json'
    })
  }

  //------------------------------------------------------------------------//

}
