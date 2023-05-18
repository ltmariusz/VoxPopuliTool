import { EventEmitter, Injectable } from '@angular/core';

export interface Question {
  index: number;
  witchQuestionType: number;
}

export interface OneQuestion {
  question: string;
  allAnswers?: Array<string>;
  isMultiply?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CreateFormsManagementService {

  getAllFormsEmitter: EventEmitter<any> = new EventEmitter();

  titleForm?: string // zmienic
  descriptionForm?: string
  /**
   * zmienna do przechowywania wszystkich stworzonych pytan
   */
  createdQuestionArray?: Array<OneQuestion> = new Array




  constructor() { }

  form!: Array<any>

  switchWitchComponentAdd!: number

  //tu będzie się trzymała liczba otwartych pytań
  listOfCreatingForms: Array<Question> = new Array
  indexOfCreatingForms: number = 0



  oneChoiceCreate() {
    //dodawanie do tablicy dodatkowego pytanie (aktualnie tylko w formie cyfry)
    this.indexOfCreatingForms++
    //numer 1 "jednokrotny wybór"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionType: 1 })

  }
  fewChoiceCreate() {
    console.log("fewChoiseCreate service")
    this.indexOfCreatingForms++
    //numer 2 "wielokrotny wybór"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionType: 2 })

  }
  longAnswerCreate() {
    console.log("longAnswerCreate service")
    this.indexOfCreatingForms++
    //numer 3 "długa odpowiedź"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionType: 3 })

  }
  rateCreate() {
    console.log("rateCreate service")
    this.indexOfCreatingForms++
    //numer 4 "ocena"
    this.listOfCreatingForms.push({ index: this.indexOfCreatingForms, witchQuestionType: 4 })
  }
  submitForms() {
    console.log("test")
    this.getAllFormsEmitter.emit()
    console.log(this.titleForm)
    console.log(this.descriptionForm)
    //użyć tej zmiennej jako petli do zdobycia wszystkich pytan
    console.log(this.listOfCreatingForms.length + "ile jest pytan")
    for (let i = 0; i < this.listOfCreatingForms.length; i++) {
      const element = this.listOfCreatingForms[i];
      console.log(element)

      switch (this.listOfCreatingForms[i].witchQuestionType) {
        case 1:
          console.log("oneChoiceCreate() service")
          break;
        case 2:
          console.log("fewChoiseCreate service")

          break;
        case 3:
          console.log("longAnswerCreate service")
          break;
        case 4:
          console.log("rateCreate service")

          break;

        default:
          break;
      }
    }
    console.log(this.createdQuestionArray)
  }

}
