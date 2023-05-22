import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ){ }

  clickItem(id: number){
    this.router.navigateByUrl('/home/questionnaire');
  }

}
