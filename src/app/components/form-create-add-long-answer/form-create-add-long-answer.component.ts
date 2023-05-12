import { Component, Input } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-long-answer',
  templateUrl: './form-create-add-long-answer.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddLongAnswerComponent {

  constructor(private createFormsManagementService: CreateFormsManagementService){}

  @Input() index!: number;

  deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
  }
}
