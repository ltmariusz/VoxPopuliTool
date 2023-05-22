import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-questionnaire',
  templateUrl: './selected-questionnaire.component.html',
  styleUrls: ['./selected-questionnaire.component.scss']
})
export class SelectedQuestionnaireComponent {

  alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','X','Y','Z'
  ]

  poll = [
    {
      id: 0,
      title: 'Testowe pytanie, co na śniadanie?',
      answer: [
        {
          id: 0,
          title: 'płatki z mlekiem'
        },
        {
          id: 1,
          title: 'piwo z sokiem'
        },
        {
          id: 2,
          title: 'sok z piwem'
        },
        {
          id: 3,
          title: 'piwo z piwem'
        },
      ]
    }
  ]

}
