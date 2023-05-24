import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-panel-to-create-personal-questionnaire',
  templateUrl: './panel-to-create-personal-questionnaire.component.html',
  styleUrls: ['./panel-to-create-personal-questionnaire.component.scss']
})
export class PanelToCreatePersonalQuestionnaireComponent implements OnInit{

  personalForm = new FormGroup({
    description: new FormControl ('', [Validators.required])
  })

  question?: string

  constructor(
    private allFormsManagementService: AllFormsManagementService
    ){ }

  ngOnInit(): void {
    this.personalForm.controls.description.setValue(this.allFormsManagementService.exampleOfForm2.description);
    this.liveUpdateDescription()
  }

  liveUpdateDescription(){
    this.personalForm.get('description')!.valueChanges.subscribe(value => {
      this.allFormsManagementService.updateLiveDescription(value!)
      // this.allFormsManagementService.exampleOfForm2.description = value!
      console.log(this.allFormsManagementService.exampleOfForm2.description)
    });
  }

}
