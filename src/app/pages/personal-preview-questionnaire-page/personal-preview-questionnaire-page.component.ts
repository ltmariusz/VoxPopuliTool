import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-preview-questionnaire-page',
  templateUrl: './personal-preview-questionnaire-page.component.html',
  styleUrls: ['./personal-preview-questionnaire-page.component.scss']
})
export class PersonalPreviewQuestionnairePageComponent {

  constructor(
    private router: Router
  ) { }

  back(){
    this.router.navigateByUrl('/home/form-list');
  }

}
