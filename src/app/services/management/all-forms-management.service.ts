import { EventEmitter, Injectable } from '@angular/core';
import { AnkietaService } from '../ankieta.service';
import { PopupManagementService } from './popup-management.service';

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
  type: string,
  answer: Array<any>,
  isAnswerRequired: boolean
}


@Injectable({
  providedIn: 'root'
})
export class AllFormsManagementService {



  constructor(
    private ankietaService: AnkietaService,
    private popupService: PopupManagementService
  ) { }

  allAnswersFromOneForm: AnswerForm2 = { title: "", answers: new Array }
  didYouEndAnswering?: boolean
  formFromUrl?: string
  listWithAnswersToPost?: Array<PostAnswers>
  getAllAnswerEmitter: EventEmitter<any> = new EventEmitter()

  getDescriptionEmit: EventEmitter<any> = new EventEmitter()

  getAllAnswerFromForm() {
    this.listWithAnswersToPost = new Array
    this.allAnswersFromOneForm = { title: "", answers: new Array }
    this.getAllAnswerEmitter.emit()


    // console.log(this.allAnswersFromOneForm)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Dodc requrement (walidacje czy wszystkie potrzbene sa stworzone)
    // if(){

    // }
    console.error(this.allAnswersFromOneForm)
    for (let i = 0; i < this.allAnswersFromOneForm.answers.length; i++) {

      const element = this.allAnswersFromOneForm.answers[i];

      console.log("////////////////////////////////////////////")


      // console.log(element.answer)
      // console.log(element)
      if (element.type === "SINGLE_CHOICE") {
        if (element.answer.length === 0) {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: null })

        } else {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: element.answer, value: null })
        }




      }
      if (element.type === "MULTIPLE_CHOICE") {

        let answers = new Array
        element.answer.forEach(answer => {
          answers.push(answer.answerId)
        });
        if (answers.length === 0) {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: null })
        } else {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: answers, value: null })
        }
      }
      if (element.type === "TEXT") {
        if (element.answer[0]==="") {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: null })

        } else {
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: element.answer[0] })
        }
      }
      if (element.type === "RATING") {
        if((element.answer[0]==="")){
          this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: null })
        }
        this.listWithAnswersToPost.push({ questionId: Number(element.question), answerIds: null, value: element.answer[0] })
      }
      console.log(element)
      if (element.isAnswerRequired) {
        if (element.answer.length === 0) {
          console.warn(element.answer)
          console.log("PRZERWANIE!!!!")
          let errorMessage = "Nie odpowiedziano na wszystkie wymagane pytania (te *gwiazdką)"
          this.popupService.errorEmit(errorMessage)
          return
        } else if (element.answer[0] === undefined) {
          console.warn("trafił sie undefined")
          console.log("PRZERWANIE!!!!")
          let errorMessage = "Nie odpowiedziano na wszystkie wymagane pytania (te *gwiazdką)"
          this.popupService.errorEmit(errorMessage)
          return
        }
      }

    }
    // console.log(this.listWithAnswersToPost)

    this.didYouEndAnswering = true
    // !!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!
    //TO DO TUTAJ JEST STWORZONE WYSYLANIE
    console.log(this.listWithAnswersToPost)
    // console.log(this.formFromUrl)
    this.ankietaService.postAnkietaPublicUuidAnswer(String(this.formFromUrl), this.listWithAnswersToPost).subscribe({
      next: (response) => {
        console.log(response.body)
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => { }
    })
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
