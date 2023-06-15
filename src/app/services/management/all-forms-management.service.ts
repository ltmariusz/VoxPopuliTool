import { EventEmitter, Injectable } from '@angular/core';
import { AnkietaService } from '../ankieta.service';

export interface OneForm {
  title: string,
  description: string,
  questions: Array<OneQuestion>
}

export interface PostAnswers {
  questionId: number,
  answerIds?: Array<any> | null,
  value?: string | null,
}
/**
 * typeOfQuestion
 * 0 - singleChoice - SINGLE_CHOICE
 * 1 - multiplyChoice - MULTIPLE_CHOICE
 * 2 - longAnswer - TEXT
 * 3 - rateAnswer - RATING
 */
export interface OneQuestion {
  typeOfQuestion: string;
  question: string;
  allAnswers?: Array<string>;
}

export interface AnswerForm {
  title: string,
  answers: Array<OneAnswer>
}
export interface AnswerForm2 {
  title: string,
  answers: Array<OneAnswer2>
}
export interface OneAnswer {
  question: string,
  answer: Array<string>
}
export interface OneAnswer2 {
  question: string,
  type:string,
  answer: Array<string>
}


@Injectable({
  providedIn: 'root'
})
export class AllFormsManagementService {



  constructor(
    private ankietaService: AnkietaService
  ) { }

  allAnswersFromOneForm: AnswerForm2 = { title: "", answers: new Array }
  didYouEndAnswering?: boolean
  formFromUrl?: string
  listWithAnswersToPost?: Array<PostAnswers>
  getAllAnswerEmitter: EventEmitter<any> = new EventEmitter()

  getDescriptionEmit: EventEmitter<any> = new EventEmitter()

  getAllAnswerFromForm() {
    this.listWithAnswersToPost = new Array
    this.getAllAnswerEmitter.emit()


    console.log(this.allAnswersFromOneForm)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Dodc requrement (walidacje czy wszystkie potrzbene sa stworzone)
    // if(){

    // }

    for (let i = 0; i < this.allAnswersFromOneForm.answers.length; i++) {
      const element = this.allAnswersFromOneForm.answers[i];
      console.log(element.answer)
      if(element.type==="SINGLE_CHOICE"){
        this.listWithAnswersToPost.push({questionId:Number(element.question), answerIds: element.answer,value:null})
      }
      if(element.type==="MULTIPLE_CHOICE"){
        this.listWithAnswersToPost.push({questionId:Number(element.question), answerIds: element.answer,value:null})
      }
      if(element.type==="TEXT"){
        this.listWithAnswersToPost.push({questionId:Number(element.question), answerIds: null,value:element.answer[0]})
      }
      if(element.type==="RATING"){
        this.listWithAnswersToPost.push({questionId:Number(element.question), answerIds: null,value:element.answer[0]})
      }
      

    }
    console.log(this.listWithAnswersToPost)

    this.didYouEndAnswering = true
    // !!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!
    //TO DO TUTAJ JEST STWORZONE WYSYLANIE
    // this.ankietaService.postAnkietaPublicUuidAnswer(this.formFromUrl, this.listWithAnswersToPost)
    // console.log(this.ankietaService.postAnkietaPublicUuidAnswer())

  }

  updateLiveDescription(value: any) {
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
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Jakie są najpopularniejsze języki programowania?",
          allAnswers: ["JavaScript", "Python", "Java", "C++", "C#"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Co oznacza skrót HTML?",
          allAnswers: ["HyperText Markup Language", "Nic"],

        },
        {
          typeOfQuestion: "MULTIPLE_CHOICE",
          question: "W jakim roku założono firmę Apple?",
          allAnswers: ["1976", "1000", "Jutro założą", "Jedna odpowiedz i ta jest poprawna"],

        },
        {
          typeOfQuestion: "MULTIPLE_CHOICE",
          question: "Która planeta jest najbliższa Słońcu?",
          allAnswers: ["Merkury", "Ziemia", "Ktoś jeszcze"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Jak nazywa się największy kontynent na Ziemi?",
          allAnswers: ["Azja"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Kto napisał powieść 'Wojna i pokój'?",
          allAnswers: ["Lew Tołstoj"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Ile wynosi pierwiastek kwadratowy z 144?",
          allAnswers: ["12"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "W którym roku odbyła się pierwsza wyprawa człowieka na Księżyc?",
          allAnswers: ["1969"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Kto namalował obraz Mona Lisa?",
          allAnswers: ["Leonardo da Vinci"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Jak nazywa się najdłuższa rzeka na świecie?",
          allAnswers: ["Nil"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Które zwierzę jest największe na Ziemi?",
          allAnswers: ["Błękitny wieloryb"],

        },
        {
          typeOfQuestion: "SINGLE_CHOICE",
          question: "Które państwo jest największym producentem kawy na świecie?",
          allAnswers: ["Brazylia"],

        },
        {
          typeOfQuestion: "TEXT",
          question: "Ile dni ma rok przestępny?",
        },
        {
          typeOfQuestion: "TEXT",
          question: "opowiedz mi osobie",
        },
        {
          typeOfQuestion: "RATING",
          question: "Jak bardzo nas lubisz",
        },
      ]
    }


  exampleOfForm1: Array<OneQuestion> = [
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Jakie są najpopularniejsze języki programowania?",
      allAnswers: ["JavaScript", "Python", "Java", "C++", "C#"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Co oznacza skrót HTML?",
      allAnswers: ["HyperText Markup Language", "Nic"],

    },
    {
      typeOfQuestion: "MULTIPLE_CHOICE",
      question: "W jakim roku założono firmę Apple?",
      allAnswers: ["1976", "1000", "Jutro założą", "Jedna odpowiedz i ta jest poprawna"],

    },
    {
      typeOfQuestion: "MULTIPLE_CHOICE",
      question: "Która planeta jest najbliższa Słońcu?",
      allAnswers: ["Merkury", "Ziemia", "Ktoś jeszcze"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Jak nazywa się największy kontynent na Ziemi?",
      allAnswers: ["Azja"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Kto napisał powieść 'Wojna i pokój'?",
      allAnswers: ["Lew Tołstoj"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Ile wynosi pierwiastek kwadratowy z 144?",
      allAnswers: ["12"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "W którym roku odbyła się pierwsza wyprawa człowieka na Księżyc?",
      allAnswers: ["1969"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Kto namalował obraz Mona Lisa?",
      allAnswers: ["Leonardo da Vinci"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Jak nazywa się najdłuższa rzeka na świecie?",
      allAnswers: ["Nil"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Które zwierzę jest największe na Ziemi?",
      allAnswers: ["Błękitny wieloryb"],

    },
    {
      typeOfQuestion: "SINGLE_CHOICE",
      question: "Które państwo jest największym producentem kawy na świecie?",
      allAnswers: ["Brazylia"],

    },
    {
      typeOfQuestion: "TEXT",
      question: "Ile dni ma rok przestępny?",
    },
    {
      typeOfQuestion: "TEXT",
      question: "opowiedz mi osobie",
    },
    {
      typeOfQuestion: "RATING",
      question: "Jak bardzo nas lubisz",
    },
  ];

  exampleRateDelivery: OneForm = {
    title: "Ocena dostawy",
    description: "Właśnie miała miejsce twoja dostawa. Twoja opinia jest dla nas bardzo ważna. Prosimy Cię o uzupełnienie tej prostej ankiety. Pozwoli to nam poprawić naszą pracę. Numer dostawy: 4568561. Data dostawy: 25.05.2023. Kierowca: GNOK2202 Mariusz Lemanski",
    questions: [
      {
        typeOfQuestion: "RATING",
        question: "Jak oceniasz dostawę?",
      },
      {
        typeOfQuestion: "RATING",
        question: "Jak oceniasz czas realizacji?",
      },
      {
        typeOfQuestion: "SINGLE_CHOICE",
        question: "Czy dotarły do Ciebie wszystkie zamówione produkty?",
        allAnswers: ["tak", "nie"]
      },
      {
        typeOfQuestion: "TEXT",
        question: "Opisz brakujące produkty",
      },
      {
        typeOfQuestion: "TEXT",
        question: "Uwagi do dostawy",
      },
    ]
  }
  exampleRateVisit: OneForm = {
    title: "Ocena wizyty",
    description: "Dziś odwiedził Cię Twój opiekun handlowy mamy nadzieje, że jesteś zadowolony z tej wizyty. Prosimy Cię o uzupęlnienie tej prostej ankiety.",
    questions: [
      {
        typeOfQuestion: "SINGLE_CHOICE",
        question: "Czy wizyta okazała się pomocna?",
        allAnswers: ["Zdecydowanie tak", "tak", "raczej tak", "raczej nie", "nie", "Zdecydowanie nie"]
      },
      {
        typeOfQuestion: "MULTIPLE_CHOICE",
        question: "Co zaproponował Ci opiekun?",
        allAnswers: ["produkt w niższek cenie", "dołączenie do programu lojalnościowego", "przedstawił listę nowych pakietów", "zaproponował opłatę zalegających faktór"]
      },
      {
        typeOfQuestion: "RATING",
        question: "Jak oceniasz przebieg wizyty?",
      },
      {
        typeOfQuestion: "RATING",
        question: "Jak oceniasz współprace z aktualnym opiekunem?",
      },
      {
        typeOfQuestion: "TEXT",
        question: "Czy masz jakieś uwagi do wizyty?",
      },
      {
        typeOfQuestion: "RATING",
        question: "Jak oceniasz prezencje przedstawiciela?",
      },
      {
        typeOfQuestion: "TEXT",
        question: "Czy masz jakieś uwagi do prezencji przedstawiciela",
      }
    ]
  }

  exampleDoneAnswerForm =
    {
      title: "Ocena wizyty",
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
          allAnswers: ["produkt w niższej cenie", "dołączenie do programu lojalnościowego", "przedstawił listę nowych pakietów", "zaproponował opłatę zalegających faktór"],
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
