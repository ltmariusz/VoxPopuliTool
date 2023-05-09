import { Injectable } from '@angular/core';

export interface Question{
  index:number;
}

@Injectable({
  providedIn: 'root'
})
export class CreateFormsManagementService {

  constructor() { }

  form!: Array<any>
//tu będzie się trzymała liczba otwartych pytań
  listOfCreatingForms: Array<Question> = new Array
  indexOfCreatingForms:number = 0

  oneChoiseCreate() {
    //dodawanie do tablicy dodatkowego pytanie (aktualnie tylko w formie cyfry)
    this.indexOfCreatingForms++
    this.listOfCreatingForms.push({index:this.indexOfCreatingForms})
  }
  fewChoiseCreate(){
    console.log("fewChoiseCreate service")
  }
  longAnswerCreate() {
    console.log("longAnswerCreate service")

  }
  rateCreate() {
    console.log("rateCreate service")

  }
}
