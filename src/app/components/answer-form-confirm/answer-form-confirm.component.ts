import { Component } from '@angular/core';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-answer-form-confirm',
  templateUrl: './answer-form-confirm.component.html',
  styleUrls: ['../../../style/style-of-answers.scss', './answer-form-confirm.component.scss']
})
export class AnswerFormConfirmComponent {

  constructor(private allFormsManagementService: AllFormsManagementService) { }


  getAllAnswerFromForm() {
    this.allFormsManagementService.getAllAnswerFromForm()
  }
}
