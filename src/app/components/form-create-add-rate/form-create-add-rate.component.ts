import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-add-rate',
  templateUrl: './form-create-add-rate.component.html',
  styleUrls: ['./../../../style/style-of-answers.scss']
})
export class FormCreateAddRateComponent implements OnInit, OnDestroy {



  constructor(private createFormsManagementService: CreateFormsManagementService,
    private fb:FormBuilder) { }

  @Input() index!: number
  rateForm!:FormGroup
  isDeleted?:boolean
  isRequired?:boolean
licznik = 0
  // rateForm = new FormGroup({
  //   rateQuestionInput: new FormControl('', [Validators.required])
  // })

  ngOnInit(): void { 
    this.isDeleted=false
    this.rateForm= this.fb.group({
      rateQuestionInput: ['',[Validators.required]]
    })
    this.getRateForm()
  }
  
  isRequire(){
    this.isRequired = !this.isRequired
    console.log(this.isRequired)
  }

  deleteThisQuestion(){
    this.isDeleted=true

    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
    console.log(this.index)
    this.createFormsManagementService.createdQuestionArray?.splice(this.index,1)
    console.log(this.createFormsManagementService.createdQuestionArray)
    
  }


  getRateForm() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(
      res => {
        if (this.isDeleted === false) {
        this.createFormsManagementService.createdQuestionArray?.push({questionType:"RATING", question: this.rateForm.get('rateQuestionInput')?.value,isRequired:this.isRequired! })
        this.licznik += 1
        console.log(this.licznik)  
      }
        // this.createFormsManagementService.titleForm = this.createFormsTitle.get('titleForm')?.value!
        // this.createFormsManagementService.descriptionForm = this.createFormsTitle.get('descriptionForm')?.value!
      })
  }


  ngOnDestroy(): void {
    this.deleteThisQuestion()
  }
}
