import { Component, Input } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-rate',
  templateUrl: './form-create-add-rate.component.html',
  styleUrls: ['./../../../style/style-of-answers.scss']
})
export class FormCreateAddRateComponent {

constructor(private createFormsManagementService:CreateFormsManagementService){}

@Input() index!:number

deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
  }

}
