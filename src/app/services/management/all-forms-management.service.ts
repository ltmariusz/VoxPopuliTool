import { EventEmitter, Injectable } from '@angular/core';

export interface OneForm {
  title: string,
  description: string,
  questions: Array<OneQuestion>
}

/**
 * 0 - singleChoice
 * 1 - multiplyChoice
 * 2 - longAnswer
 * 3 - rateAnswer
 */
export interface OneQuestion {
  typeOfQuestion: number,
  question: string;
  allAnswers?: Array<string>;
}

export interface AnswerForm {
  title: string,
  answers: Array<OneAnswer>
}

export interface OneAnswer {
  question: string,
  answer: Array<string>
}


@Injectable({
  providedIn: 'root'
})
export class AllFormsManagementService {

  

  constructor() { }

  allAnswersFromOneForm: AnswerForm ={title:"",answers:new Array}

  getAllAnswerEmitter: EventEmitter<any> = new EventEmitter()

  getDescriptionEmit: EventEmitter<any> = new EventEmitter()

  getAllAnswerFromForm() {
    this.getAllAnswerEmitter.emit()
    console.log(this.allAnswersFromOneForm)

  }

  updateLiveDescription(value: any){
    // console.log(value)
    this.exampleOfForm2.description = value!
    this.getDescriptionEmit.emit()
  }


  // PRZYKLADOWE DANE ((MOZNA USUNAC isMultiply))
  exampleOfForm2: OneForm =
    {
      title: "Witaj w testowej ankiecie",
      description: "To jest testowa ankieta w której będziesz odpowiadał jak chcesz",
      questions: [
        {
          typeOfQuestion: 0,
          question: "Jakie są najpopularniejsze języki programowania?",
          allAnswers: ["JavaScript", "Python", "Java", "C++", "C#"],

        },
        {
          typeOfQuestion: 0,
          question: "Co oznacza skrót HTML?",
          allAnswers: ["HyperText Markup Language", "Nic"],

        },
        {
          typeOfQuestion: 1,
          question: "W jakim roku założono firmę Apple?",
          allAnswers: ["1976", "1000", "Jutro założą", "Jedna odpowiedz i ta jest poprawna"],

        },
        {
          typeOfQuestion: 1,
          question: "Która planeta jest najbliższa Słońcu?",
          allAnswers: ["Merkury", "Ziemia", "Ktoś jeszcze"],

        },
        {
          typeOfQuestion: 0,
          question: "Jak nazywa się największy kontynent na Ziemi?",
          allAnswers: ["Azja"],

        },
        {
          typeOfQuestion: 0,
          question: "Kto napisał powieść 'Wojna i pokój'?",
          allAnswers: ["Lew Tołstoj"],

        },
        {
          typeOfQuestion: 0,
          question: "Ile wynosi pierwiastek kwadratowy z 144?",
          allAnswers: ["12"],

        },
        {
          typeOfQuestion: 0,
          question: "W którym roku odbyła się pierwsza wyprawa człowieka na Księżyc?",
          allAnswers: ["1969"],

        },
        {
          typeOfQuestion: 0,
          question: "Kto namalował obraz Mona Lisa?",
          allAnswers: ["Leonardo da Vinci"],

        },
        {
          typeOfQuestion: 0,
          question: "Jak nazywa się najdłuższa rzeka na świecie?",
          allAnswers: ["Nil"],

        },
        {
          typeOfQuestion: 0,
          question: "Które zwierzę jest największe na Ziemi?",
          allAnswers: ["Błękitny wieloryb"],

        },
        {
          typeOfQuestion: 0,
          question: "Które państwo jest największym producentem kawy na świecie?",
          allAnswers: ["Brazylia"],

        },
        {
          typeOfQuestion: 2,
          question: "Ile dni ma rok przestępny?",
        },
        {
          typeOfQuestion: 2,
          question: "opowiedz mi osobie",
        },
        {
          typeOfQuestion: 3,
          question: "Jak bardzo nas lubisz",
        },
      ]
    }


  exampleOfForm1: Array<OneQuestion> = [
    {
      typeOfQuestion: 0,
      question: "Jakie są najpopularniejsze języki programowania?",
      allAnswers: ["JavaScript", "Python", "Java", "C++", "C#"],

    },
    {
      typeOfQuestion: 0,
      question: "Co oznacza skrót HTML?",
      allAnswers: ["HyperText Markup Language", "Nic"],

    },
    {
      typeOfQuestion: 1,
      question: "W jakim roku założono firmę Apple?",
      allAnswers: ["1976", "1000", "Jutro założą", "Jedna odpowiedz i ta jest poprawna"],

    },
    {
      typeOfQuestion: 1,
      question: "Która planeta jest najbliższa Słońcu?",
      allAnswers: ["Merkury", "Ziemia", "Ktoś jeszcze"],

    },
    {
      typeOfQuestion: 0,
      question: "Jak nazywa się największy kontynent na Ziemi?",
      allAnswers: ["Azja"],

    },
    {
      typeOfQuestion: 0,
      question: "Kto napisał powieść 'Wojna i pokój'?",
      allAnswers: ["Lew Tołstoj"],

    },
    {
      typeOfQuestion: 0,
      question: "Ile wynosi pierwiastek kwadratowy z 144?",
      allAnswers: ["12"],

    },
    {
      typeOfQuestion: 0,
      question: "W którym roku odbyła się pierwsza wyprawa człowieka na Księżyc?",
      allAnswers: ["1969"],

    },
    {
      typeOfQuestion: 0,
      question: "Kto namalował obraz Mona Lisa?",
      allAnswers: ["Leonardo da Vinci"],

    },
    {
      typeOfQuestion: 0,
      question: "Jak nazywa się najdłuższa rzeka na świecie?",
      allAnswers: ["Nil"],

    },
    {
      typeOfQuestion: 0,
      question: "Które zwierzę jest największe na Ziemi?",
      allAnswers: ["Błękitny wieloryb"],

    },
    {
      typeOfQuestion: 0,
      question: "Które państwo jest największym producentem kawy na świecie?",
      allAnswers: ["Brazylia"],

    },
    {
      typeOfQuestion: 2,
      question: "Ile dni ma rok przestępny?",
    },
    {
      typeOfQuestion: 2,
      question: "opowiedz mi osobie",
    },
    {
      typeOfQuestion: 3,
      question: "Jak bardzo nas lubisz",
    },
  ];


}
