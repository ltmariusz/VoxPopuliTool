import { EventEmitter, Injectable } from '@angular/core';

export interface Question {
  index: number;
  witchQuestionTupe:number;
}

@Injectable({
  providedIn: 'root'
})
export class CreateFormsManagementService {

  getAllFormsEmitter: EventEmitter<any> = new EventEmitter();

  titleForm?:string // zmienic
  descriptionForm?:string

  constructor() { }

  form!: Array<any>

  switchWitchComponentAdd!: number

  //tu będzie się trzymała liczba otwartych pytań
  listOfCreatingForms: Array<Question> = new Array
  indexOfCreatingForms: number = 0

  oneChoiseCreate() {
    //dodawanie do tablicy dodatkowego pytanie (aktualnie tylko w formie cyfry)
    this.indexOfCreatingForms++
    //numer 1 "jednokrotny wybór"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionTupe: 1 })

  }
  fewChoiseCreate() {
    console.log("fewChoiseCreate service")
    this.indexOfCreatingForms++
    //numer 2 "wielokrotny wybór"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionTupe: 2 })

  }
  longAnswerCreate() {
    console.log("longAnswerCreate service")
    this.indexOfCreatingForms++
    //numer 3 "długa odpowiedź"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionTupe: 3 })

  }
  rateCreate() {
    console.log("rateCreate service")
    this.indexOfCreatingForms++
    //numer 4 "ocena"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionTupe: 4 })
  }
  submitForms(){
    console.log("test")
    this.getAllFormsEmitter.emit()
    console.log(this.titleForm)
    console.log(this.descriptionForm)
  }

}
