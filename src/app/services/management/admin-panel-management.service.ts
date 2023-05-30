import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelManagementService {

  constructor() { }

  emitUsersList: EventEmitter<any> = new EventEmitter();

  getUserList(){
    this.emitUsersList.emit()
  }
}
