import { Component } from '@angular/core';

@Component({
  selector: 'app-answer-form-title',
  templateUrl: './answer-form-title.component.html',
  styleUrls: ['./answer-form-title.component.scss']
})
export class AnswerFormTitleComponent {

  /**
   * tytuł ankiety
   */
  titleOfForm="Tytuł Ankiety"

  /**
   * Opis ankiety
   */
  descriptionOfForm="W tym miejscu pojawiać się będzie opis utworzonej ankiety"
  
}
