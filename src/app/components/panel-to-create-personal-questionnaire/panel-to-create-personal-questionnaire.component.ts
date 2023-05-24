import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  keyInputs = this.fb.group({
    input: this.fb.array([])
  });

  question?: string

  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb:FormBuilder
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

  addMetadate() {
    const inputForm = this.fb.group({
        key: new FormControl('', [Validators.required]),
        value: new FormControl('', [Validators.required])
    });
  
    this.input.push(inputForm);
  }

  deleteMetadate(i: any){
    this.input.removeAt(i);
  }

  get input() {
    return this.keyInputs.controls["input"] as FormArray;
  }

  isKeyArrayEmpty() {
    return this.input.length === 0;
  }

}
