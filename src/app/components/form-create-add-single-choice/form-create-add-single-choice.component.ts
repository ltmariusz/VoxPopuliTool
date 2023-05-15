import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

export interface Answers{
 last:boolean;
}


@Component({
  selector: 'app-form-create-add-single-choice',
  templateUrl: './form-create-add-single-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})

export class FormCreateAddSingleChoiceComponent implements OnInit,OnDestroy {

  constructor(private createFormsManagementService:CreateFormsManagementService){}

  //Zmienne od odpowiedzi
  indexOfAnswer:number = 1
  numberOfAnswer:Array<Answers> = [{last: true}]

  indexOfForms!: number;

  /**zmienna odpowiadająca za licznik pytania (wzięte z ngfor z form-creator-page) */
  @Input() index!: number;

  singleChoiceForm = new FormGroup({
    singleChoiceQuestionInput: new FormControl('',[Validators.required]),
    singleAnswersInput: new FormControl('',Validators.required) //ZMIENIC NA REAKTYWNE
  })



  ngOnInit() {
    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
    console.log(this.index +" przekazany index")
  }
  ngOnDestroy(){
    // this.createFormsManagementService.indexOfCreatingForms = 0
    // this.indexOfAnswer=0
    // this.createFormsManagementService.listOfCreatingForms = new Array
    // this.numberOfAnswer= new Array
    // this.numberOfAnswer = [{last: true}]
  }
  deleteThisQuestion(){
    this.createFormsManagementService.listOfCreatingForms.splice(this.index,1)
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
