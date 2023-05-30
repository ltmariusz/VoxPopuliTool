import { Injectable } from '@angular/core';
import { User } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public user?: User

  constructor() { }

  getUser(){
    return this.user
  }
  // getName():string|undefined{
  //   return this.user?.name;
  // }
  // getId(): number{
  //   return this.user!.id
  // }
  // isAdmin():boolean|undefined{
  //   return this.user?.type == 'Admin';
  // }
}
