import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';
import { Answers } from '../form-create-add-single-choice/form-create-add-single-choice.component';

@Component({
  selector: 'app-form-create-add-multiply-choice',
  templateUrl: './form-create-add-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddMultiplyChoiceComponent implements OnInit {

  multiplyChoiceForm!: FormGroup




  constructor(
    private createFormsManagementService: CreateFormsManagementService,
    private fb: FormBuilder) { }

  indexOfForms!: number


  @Input() index!: number;

  numberOfAnswer: Array<Answers> = [{ last: true }]
  formControlCounter = 1; // Licznik formControlów


  ngOnInit() {
    this.multiplyChoiceForm = this.fb.group({
      multiplyChoiceQuestionInput: ['', [Validators.required]],
      answerControlNames: this.fb.array([])
    });


    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
    console.log(this.index + " przekazany index")
    this.getMultipleChoice()
  }

  getMultipleChoice() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(res => {
      let multiplyChoiceQuestion = this.multiplyChoiceForm.get('multiplyChoiceQuestionInput')?.value
      let allMultiplyChoices = new Array<string>
      for (let i = 0; i < this.answerControlNames.controls.length; i++) {
        const element = this.answerControlNames.controls[i].value;
        allMultiplyChoices.push(element)
      }
      this.createFormsManagementService.createdQuestionArray?.push({typeOfQuestion:"MULTIPLE_CHOICE", question: multiplyChoiceQuestion, allAnswers: allMultiplyChoices})
    })

  }


  get answerControlNames() {
    return this.multiplyChoiceForm.get('answerControlNames') as FormArray;
  }

  test() {
    console.log(this.multiplyChoiceForm.get('answerControlNames'))
    console.log(this.multiplyChoiceForm)
  }
  getAnswerControlName(index: number): string {
    return `answerControlNames.${index}.answerControl`;
  }


  /**
   * uzuwanie całego zapytania
   */
  deleteThisQuestion() {
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
  }

  /**
   * doda nową moliwość odpowiedzi
   * @param answer 
   */
  clickCreateNewAnswer() {
    // console.log(this.answerControlNames.controls.length)
    // if (this.answerControlNames.controls.length) {

    // }
    (this.multiplyChoiceForm.get('answerControlNames') as FormArray).push(this.fb.control(''))
    console.log(this.multiplyChoiceForm)
  }
  deleteAnswer(index: number) {
    this.answerControlNames.removeAt(index);
    console.log(index)
  }



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // addNewFormControl() {
  //   console.log(this.multiplyChoiceForm)
  //   console.log("przed dodaniem")
  //   const newFormControlName = `nowyFormControler${this.formControlCounter}`;
  //   const nowyFormControler = new FormControl('', [Validators.required]);
  //   this.multiplyChoiceForm.addControl(newFormControlName, nowyFormControler);
  //   this.formControlCounter++;

  //   // Zaktualizuj wartości formularza
  //   this.multiplyChoiceForm.updateValueAndValidity();
  // }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  showAll() { //To bedzie się miało dziać na inpucie
    // for (let i = 0; i < this.multiplyAnswer.controls.length; i++) {
    //   const answerControl = this.multiplyChoiceForm.get('multiplyAnswer.' + i) as FormControl;
    //   console.log(answerControl.value);
    // }
    console.log(this.multiplyChoiceForm.value)
    console.log(this.multiplyChoiceForm.get('multiplyChoiceQuestionInput')?.value)
    for (let i = 0; i < this.answerControlNames.controls.length; i++) {
      const element = this.answerControlNames.controls[i].value;
      console.log(element)

    }
  }


}
