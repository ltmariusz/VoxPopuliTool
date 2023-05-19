import { Component } from '@angular/core';

@Component({
  selector: 'app-answer-form-long-answer',
  templateUrl: './answer-form-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-long-answer.component.scss']
})
export class AnswerFormLongAnswerComponent {
  
  // najpewnie to będzie zmienna typu input
  index=0

  question="Czy podobał Ci się nasz produkt? Jeśli tak to proszę opisz co podoba Ci się najbardziej? Jeżeli produkt Ci się nie podobał to napisz co powinniśmy poprawić"
}
