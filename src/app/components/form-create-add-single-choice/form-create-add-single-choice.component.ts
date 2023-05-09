import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

interface Answers{
 last:boolean;
}


@Component({
  selector: 'app-form-create-add-single-choice',
  templateUrl: './form-create-add-single-choice.component.html',
  styleUrls: ['./form-create-add-single-choice.component.scss']
})

export class FormCreateAddSingleChoiceComponent implements OnInit,OnDestroy {

  constructor(private createFormsManagementService:CreateFormsManagementService){}

  //Zmienne od odpowiedzi
  indexOfAnswer:number = 1
  numberOfAnswer:Array<Answers> = [{last: true}]

  indexOfForms!: number;

  ngOnInit() {
    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
  }
  ngOnDestroy(){
    // this.createFormsManagementService.indexOfCreatingForms = 0
    // this.indexOfAnswer=0
    // this.createFormsManagementService.listOfCreatingForms = new Array
    // this.numberOfAnswer= new Array
    // this.numberOfAnswer = [{last: true}]
  }
  deleteThisQuestion(){
    console.log(this.indexOfForms)
    this.createFormsManagementService.listOfCreatingForms.splice(this.indexOfForms-1,1)
    console.log(this.createFormsManagementService.listOfCreatingForms[this.indexOfForms-1])
  }

  
  /**
   * Funkcja dodawająca nową przestrzeń do pisania odpowiedzi
   * @param answer 
   */
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
