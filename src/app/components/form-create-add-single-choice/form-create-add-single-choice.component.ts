import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

export interface Answers {
  last: boolean;
}


@Component({
  selector: 'app-form-create-add-single-choice',
  templateUrl: './form-create-add-single-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})

export class FormCreateAddSingleChoiceComponent implements OnInit, OnDestroy {

  constructor(private createFormsManagementService: CreateFormsManagementService,
    private fb: FormBuilder) { }

  //Zmienne od odpowiedzi
  indexOfAnswer: number = 1
  numberOfAnswer: Array<Answers> = [{ last: true }]

  indexOfForms!: number;

  /**zmienna odpowiadająca za licznik pytania (wzięte z ngfor z form-creator-page) */
  @Input() index!: number;
  singleChoiceForm!: FormGroup

  // singleChoiceForm = new FormGroup({
  //   singleChoiceQuestionInput: new FormControl('',[Validators.required]),
  //   singleAnswersInput: new FormControl('',Validators.required) //ZMIENIC NA REAKTYWNE
  // })



  ngOnInit() {
    this.singleChoiceForm = this.fb.group({
      singleChoiceQuestionInput: ['', [Validators.required]],
      singleAnswersControlNames: this.fb.array([])
    })


    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
    console.log(this.index + " przekazany index")
    this.getSingleChoice()
  }

  getSingleChoice() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(res => {
      let singleChoiceQuestion = this.singleChoiceForm.get('singleChoiceQuestionInput')?.value
      let allSingleChoices = new Array<string>
      for (let i = 0; i < this.singleAnswersControlNames.controls.length; i++) {
        allSingleChoices.push(this.singleAnswersControlNames.controls[i].value)
      }
      this.createFormsManagementService.createdQuestionArray?.push({typeOfQuestion:0,question:singleChoiceQuestion, allAnswers:allSingleChoices})
      // let oneChoiceCreate
    })
  }

  get singleAnswersControlNames() {
    return this.singleChoiceForm.get('singleAnswersControlNames') as FormArray
  }

  getSingleAnswersControlNames(index: number): string {
    return `singleAnswersControlNames.${index}.answerControl`
  }

  ngOnDestroy() {
    // this.createFormsManagementService.indexOfCreatingForms = 0
    // this.indexOfAnswer=0
    // this.createFormsManagementService.listOfCreatingForms = new Array
    // this.numberOfAnswer= new Array
    // this.numberOfAnswer = [{last: true}]
  }

  /**
   * uzuwanie całego zapytania
   */
  deleteThisQuestion() {
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
    console.log(this.createFormsManagementService.listOfCreatingForms[this.indexOfForms - 1])
  }


  /**
   * Funkcja dodawająca nową przestrzeń do pisania odpowiedzi
   * @param answer 
   */
  clickCreateNewAnswer() {
    // console.log(this.singleAnswersControlNames.controls.length)
    (this.singleChoiceForm.get('singleAnswersControlNames') as FormArray).push(this.fb.control(''))
    console.log(this.singleChoiceForm)
    // if (answer.last == true) {
    //   this.numberOfAnswer.push({ last: true })
    //   this.numberOfAnswer[this.numberOfAnswer.length - 2].last = false
    // }
    
  }

  deleteAnswer(index: number) {
    console.log(index)
    this.singleAnswersControlNames.removeAt(index)
  }


}
