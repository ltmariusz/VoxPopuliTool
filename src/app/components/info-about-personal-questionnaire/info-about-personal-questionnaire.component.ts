import { Component, OnInit } from '@angular/core';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-info-about-personal-questionnaire',
  templateUrl: './info-about-personal-questionnaire.component.html',
  styleUrls: ['./info-about-personal-questionnaire.component.scss']
})
export class InfoAboutPersonalQuestionnaireComponent implements OnInit{

  answers?: any

  link = 'www.localhost.pl/reasumuje-kwintesencje-tematu-mariusz-pudzianowski'

  constructor(
    public allFormsManagementService: AllFormsManagementService
  ) { }

  ngOnInit(): void {
    this.answers = this.allFormsManagementService.exampleDoneAnswerForm
  }

  copyLink(){
    navigator.clipboard.writeText(this.link);
    // alert("Skopiowano: " + this.link)

  }

}
