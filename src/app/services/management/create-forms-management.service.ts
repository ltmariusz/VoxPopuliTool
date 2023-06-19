import { EventEmitter, Injectable } from '@angular/core';
import { AnkietaService, QuestionList } from '../ankieta.service';
import { PopupManagementService } from './popup-management.service';

export interface Question {
  index: number;
  witchQuestionType: number;
}
/**
 * typeOfQuestion
 * 0 - singleChoice - SINGLE_CHOICE
 * 1 - multiplyChoice - MULTIPLE_CHOICE
 * 2 - longAnswer - TEXT
 * 3 - rateAnswer - RATING
 */
export interface OneQuestion {
  questionType: string;
  question: string;
  answerList?: Array<string>;
  isRequired: boolean
}


export interface CreatedQuestionArray {
  title: string,
  description: string,
  isPublic: boolean,
  questionList: Array<OneQuestion>
}

@Injectable({
  providedIn: 'root'
})
export class CreateFormsManagementService {

  getAllFormsEmitter: EventEmitter<any> = new EventEmitter();



  titleForm?: string // zmienic
  descriptionForm?: string
  isPublic?: boolean
  formCreatePostObject?: CreatedQuestionArray
  questionList?: Array<QuestionList>
  clickedDone?:boolean

  /**
   * zmienna do przechowywania wszystkich stworzonych pytan
   */
  createdQuestionArray?: Array<OneQuestion> = new Array

  constructor(private ankietaService: AnkietaService,
    private popupService: PopupManagementService) { }

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
    this.createdQuestionArray = new Array
    this.getAllFormsEmitter.emit()


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
    //Przechowuje aktualny 
    console.log(this.titleForm)
    console.log(this.descriptionForm)
    console.log(this.isPublic)
    // questionList.push({questionType: , question: , answerList: ,isRequired})
    // answerList.psuh(string)
    console.log(this.formCreatePostObject)
    // this.createdQuestionArray!.forEach((element,index) => {
    //   console.log(element.question)
    //   if(element.question ===""){
    //     console.log("jeden")
    //     this.createdQuestionArray?.splice(index, 1);
    //   }
    // });

    // this.questionList= 
    this.createdQuestionArray

    this.formCreatePostObject = {
      title: this.titleForm!,
      description: this.descriptionForm!,
      questionList: this.createdQuestionArray!,
      isPublic: this.isPublic!
    }
    if (this.titleForm !=="") {
      this.ankietaService.postAnkieta(this.titleForm!, this.descriptionForm!, this.isPublic!, this.createdQuestionArray).subscribe({
        next: (response) => {
          console.log("wysłane")
          this.popupService.succesEmit("Stworzyłeś nową ankiete!")
          console.log(response.body)
          this.clickedDone =true
        },
        error: (error) => { 
          
          console.log(error)
        },
        complete: () => { }
      })
      console.log("test")
    }
    console.log(this.formCreatePostObject)
  }

}
