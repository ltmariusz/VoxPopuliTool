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
  didYouEndAnswering?:boolean
  getAllAnswerEmitter: EventEmitter<any> = new EventEmitter()

  getDescriptionEmit: EventEmitter<any> = new EventEmitter()

  getAllAnswerFromForm() {
    this.getAllAnswerEmitter.emit()
    console.log(this.allAnswersFromOneForm)
    this.didYouEndAnswering =true
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

  exampleRateDelivery: OneForm = {
    title:"Ocena dostawy",
    description: "Właśnie miała miejsce twoja dostawa. Twoja opinia jest dla nas bardzo ważna. Prosimy Cię o uzupełnienie tej prostej ankiety. Pozwoli to nam poprawić naszą pracę. Numer dostawy: 4568561. Data dostawy: 25.05.2023. Kierowca: GNOK2202 Mariusz Lemanski",
    questions:[
      {
        typeOfQuestion: 3,
        question: "Jak oceniasz dostawę?",
      },
      {
        typeOfQuestion: 3,
        question: "Jak oceniasz czas realizacji?",
      },
      {
        typeOfQuestion: 0,
        question: "Czy dotarły do Ciebie wszystkie zamówione produkty?",
        allAnswers: ["tak", "nie"]
      },
      {
        typeOfQuestion: 2,
        question: "Opisz brakujące produkty",
      },
      {
        typeOfQuestion: 2,
        question: "Uwagi do dostawy",
      },
    ]
  }
  exampleRateVisit: OneForm = {
    title:"Ocena wizyty",
    description: "Dziś odwiedził Cię Twój opiekun handlowy mamy nadzieje, że jesteś zadowolony z tej wizyty. Prosimy Cię o uzupęlnienie tej prostej ankiety.",
    questions:[
      {
        typeOfQuestion: 0,
        question: "Czy wizyta okazała się pomocna?",
        allAnswers: ["Zdecydowanie tak", "tak", "raczej tak", "raczej nie", "nie", "Zdecydowanie nie"]
      },
      {
        typeOfQuestion: 1,
        question: "Co zaproponował Ci opiekun?",
        allAnswers:["produkt w niższek cenie","dołączenie do programu lojalnościowego","przedstawił listę nowych pakietów","zaproponował opłatę zalegających faktór"]
      },
      {
        typeOfQuestion: 3,
        question: "Jak oceniasz przebieg wizyty?",
      },
      {
        typeOfQuestion: 3,
        question: "Jak oceniasz współprace z aktualnym opiekunem?",
      },
      {
        typeOfQuestion: 2,
        question: "Czy masz jakieś uwagi do wizyty?",
      },
      {
        typeOfQuestion: 3,
        question: "Jak oceniasz prezencje przedstawiciela?",
      },
      {
        typeOfQuestion: 2,
        question: "Czy masz jakieś uwagi do prezencji przedstawiciela",
      }
    ]
  }

  exampleDoneAnswerForm =
    {
      title:"Ocena wizyty",
      description: "Dziś odwiedził Cię Twój opiekun handlowy mamy nadzieje, że jesteś zadowolony z tej wizyty. Prosimy Cię o uzupęlnienie tej prostej ankiety.",
        questions: [
        {
          typeOfQuestion: 0,
          question: "Czy wizyta okazała się pomocna?",
          allAnswers: ["Zdecydowanie tak", "tak", "raczej tak", "raczej nie", "nie", "Zdecydowanie nie"],
          correct: [0]
        },
        {
          typeOfQuestion: 1,
          question: "Co zaproponował Ci opiekun?",
          allAnswers:["produkt w niższej cenie","dołączenie do programu lojalnościowego","przedstawił listę nowych pakietów","zaproponował opłatę zalegających faktór"],
          correct: [1]
        },
        {
          typeOfQuestion: 3,
          question: "Jak oceniasz przebieg wizyty?",
          correct: 4
        },
        {
          typeOfQuestion: 3,
          question: "Jak oceniasz współprace z aktualnym opiekunem?",
          correct: 5
        },
        {
          typeOfQuestion: 2,
          question: "Czy masz jakieś uwagi do wizyty?",
          correct: 'Żadnych'
        },
        {
          typeOfQuestion: 2,
          question: "Czy masz jakieś uwagi do prezencji przedstawiciela",
          correct: 'nie'
        },
        {
          typeOfQuestion: 3,
          question: "Jak bardzo nas lubisz",
          correct: 4
        },
      ]
    }


}
