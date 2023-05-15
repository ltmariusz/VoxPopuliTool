import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-rate',
  templateUrl: './form-create-add-rate.component.html',
  styleUrls: ['./../../../style/style-of-answers.scss']
})
export class FormCreateAddRateComponent implements OnInit {



  constructor(private createFormsManagementService: CreateFormsManagementService) { }

  @Input() index!: number

  rateForm = new FormGroup({
    rateQuestionInput: new FormControl('', [Validators.required])
  })

  ngOnInit(): void { }

  deleteThisQuestion() {
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
  }


  getTitleForm() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(
      res => {

        // this.createFormsManagementService.titleForm = this.createFormsTitle.get('titleForm')?.value!
        // this.createFormsManagementService.descriptionForm = this.createFormsTitle.get('descriptionForm')?.value!
      })
  }



}
