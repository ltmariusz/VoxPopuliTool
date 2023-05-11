import { Component, Input, OnInit } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';
import { Answers } from '../form-create-add-single-choice/form-create-add-single-choice.component';

@Component({
  selector: 'app-form-create-add-multiply-choice',
  templateUrl: './form-create-add-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddMultiplyChoiceComponent implements OnInit{

  constructor(private createFormsManagementService:CreateFormsManagementService){}

  indexOfForms!: number

  @Input() index!: number;

  numberOfAnswer:Array<Answers> = [{last: true}]
  ngOnInit() {
    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
    console.log(this.index +" przekazany index")
  }

  deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
  }
  clickCreateNewAnswer(answer: any){
    console.log(answer)
    if(answer.last==true){
      this.numberOfAnswer.push({last:true})
      this.numberOfAnswer[this.numberOfAnswer.length-2].last=false
    }
  }
  deleteAnswer(index: number){
    console.log(index)
    this.numberOfAnswer.splice(index,1)
  }
}
