import { Injectable } from '@angular/core';
import { User } from '../user.service';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public user?: User

  constructor() { }

  setUser(user: User){
    this.user = user;
  }



  getUser(){
    return this.user
  }
  getName():string|undefined{
    return this.user?.name;
  }
  getId(): number{
    return this.user!.id
  }
  isAdmin():boolean|undefined{
    return this.user?.role == 'ADMIN';
  }
}
