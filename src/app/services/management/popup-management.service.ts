import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupManagementService {

  popupErrorEmit: EventEmitter<any> = new EventEmitter();
  popupDoneEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  errorEmit(errorMassage: string){
    this.popupErrorEmit.emit(errorMassage)
  }

  doneEmit(doneMassage: string){
    this.popupDoneEmit.emit(doneMassage)
  }
}
