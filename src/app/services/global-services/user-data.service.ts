import { Injectable } from '@angular/core';
import { User } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public user?: User

  constructor() { }
}
