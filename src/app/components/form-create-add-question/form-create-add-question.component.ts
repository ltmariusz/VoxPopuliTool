import { Component } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-question',
  templateUrl: './form-create-add-question.component.html',
  styleUrls: ['./form-create-add-question.component.scss']
})
export class FormCreateAddQuestionComponent {

  constructor(
    private createFormsManagementService: CreateFormsManagementService) { }

  oneChoiseCreate() {
    this.createFormsManagementService.oneChoiseCreate();
  }
  fewChoiseCreate() {

  }
  longAnswerCreate() {

  }
  rateCreate() {

  }

}
