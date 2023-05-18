import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.scss']
})
export class QuestionnairesListComponent {

  questionnairesList = [
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista'
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna'
    },
  ]

  clickItem(id: number){

  }

}
