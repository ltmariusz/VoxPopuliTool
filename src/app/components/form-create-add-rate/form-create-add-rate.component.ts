import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-rate',
  templateUrl: './form-create-add-rate.component.html',
  styleUrls: ['./../../../style/style-of-answers.scss']
})
export class FormCreateAddRateComponent implements OnInit {



  constructor(private createFormsManagementService: CreateFormsManagementService,
    private fb:FormBuilder) { }

  @Input() index!: number
  rateForm!:FormGroup

  // rateForm = new FormGroup({
  //   rateQuestionInput: new FormControl('', [Validators.required])
  // })

  ngOnInit(): void { 
    this.rateForm= this.fb.group({
      rateQuestionInput: ['',[Validators.required]]
    })
    this.getRateForm()
  }

  deleteThisQuestion() {
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
  }


  getRateForm() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(
      res => {
        this.createFormsManagementService.createdQuestionArray?.push({question: this.rateForm.get('rateQuestionInput')?.value })
        // this.createFormsManagementService.titleForm = this.createFormsTitle.get('titleForm')?.value!
        // this.createFormsManagementService.descriptionForm = this.createFormsTitle.get('descriptionForm')?.value!
      })
  }



}
