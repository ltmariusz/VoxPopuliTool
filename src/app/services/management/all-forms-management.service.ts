import { Injectable } from '@angular/core';

/**
 * 0 - singleChoice
 * 1 - multiplyChoice
 * 2 - longAnswer
 * 3 - rateAnswer
 */
export interface OneQuestion {
  typeOfQuestion:number,
  question: string;
  allAnswers?: Array<string>;
  isMultiply?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AllFormsManagementService {

  constructor() { }

  exampleOfForm1: Array<OneQuestion>=[
    {
      typeOfQuestion:0,
      question: "Jakie są najpopularniejsze języki programowania?",
      allAnswers: ["JavaScript", "Python", "Java", "C++", "C#"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Co oznacza skrót HTML?",
      allAnswers: ["HyperText Markup Language","Nic"],
      isMultiply: false,
    },
    {
      typeOfQuestion:1,
      question: "W jakim roku założono firmę Apple?",
      allAnswers: ["1976","1000","Jutro założą","Jedna odpowiedz i ta jest poprawna"],
      isMultiply: true,
    },
    {
      typeOfQuestion:1,
      question: "Która planeta jest najbliższa Słońcu?",
      allAnswers: ["Merkury", "Ziemia","Ktoś jeszcze"],
      isMultiply: true,
    },
    {
      typeOfQuestion:0,
      question: "Jak nazywa się największy kontynent na Ziemi?",
      allAnswers: ["Azja"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Kto napisał powieść 'Wojna i pokój'?",
      allAnswers: ["Lew Tołstoj"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Ile wynosi pierwiastek kwadratowy z 144?",
      allAnswers: ["12"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "W którym roku odbyła się pierwsza wyprawa człowieka na Księżyc?",
      allAnswers: ["1969"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Kto namalował obraz Mona Lisa?",
      allAnswers: ["Leonardo da Vinci"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Jak nazywa się najdłuższa rzeka na świecie?",
      allAnswers: ["Nil"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Które zwierzę jest największe na Ziemi?",
      allAnswers: ["Błękitny wieloryb"],
      isMultiply: false,
    },
    {
      typeOfQuestion:0,
      question: "Które państwo jest największym producentem kawy na świecie?",
      allAnswers: ["Brazylia"],
      isMultiply: false,
    },
    {
      typeOfQuestion:2,
      question: "Ile dni ma rok przestępny?",
    },
    {
      typeOfQuestion:2,
      question: "opowiedz mi osobie",
    },
    {
      typeOfQuestion:3,
      question: "Jak bardzo nas lubisz",
    },
  ];

  
}
