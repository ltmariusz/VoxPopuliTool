import { Component } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-creator-page',
  templateUrl: './form-creator-page.component.html',
  styleUrls: ['./form-creator-page.component.scss']
})
export class FormCreatorPageComponent {

constructor(private createFormsManagementService: CreateFormsManagementService){ }

  // list:Array<any> = [1,2]
list = this.createFormsManagementService.listOfCreatingForms 
conditionExpression = 1
}
