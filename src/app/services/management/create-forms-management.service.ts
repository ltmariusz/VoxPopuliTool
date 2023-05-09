import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateFormsManagementService {

  constructor() { }

  form!: Array<any>
//tu będzie się trzymała liczba otwartych pytań
  listOfCreatingForms: Array<any> = new Array


  oneChoiseCreate() {
    //dodawanie do tablicy dodatkowego pytanie (aktualnie tylko w formie cyfry)
    this.listOfCreatingForms.push(1)
  }
  fewChoiseCreate(){
    console.log("fewChoiseCreate service")
  }

}
