import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';
import { Answers } from '../form-create-add-single-choice/form-create-add-single-choice.component';

@Component({
  selector: 'app-form-create-add-multiply-choice',
  templateUrl: './form-create-add-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddMultiplyChoiceComponent implements OnInit {

  // @ViewChildren('inputRef') inputRefs!: QueryList<ElementRef<HTMLInputElement>>;
  // @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;


  multiplyChoiceForm!: FormGroup




  constructor(
    private createFormsManagementService: CreateFormsManagementService,
    private fb: FormBuilder) { }

  indexOfForms!: number
  isDeleted?:boolean
  isRequired?:boolean
  @Input() index!: number;

  numberOfAnswer: Array<Answers> = [{ last: true }]
  formControlCounter = 1; // Licznik formControlów


  ngOnInit() {
    this.isDeleted = false
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

  isRequire(){
    this.isRequired = !this.isRequired
    console.log(this.isRequired)
  }
  
  getMultipleChoice() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(res => {
      if (this.isDeleted === false) {
        let multiplyChoiceQuestion = this.multiplyChoiceForm.get('multiplyChoiceQuestionInput')?.value
        let allMultiplyChoices = new Array<string>
        for (let i = 0; i < this.answerControlNames.controls.length; i++) {
          const element = this.answerControlNames.controls[i].value;
          allMultiplyChoices.push(element)
        }
        this.createFormsManagementService.createdQuestionArray?.push({ questionType: "MULTIPLE_CHOICE", question: multiplyChoiceQuestion, answerList: allMultiplyChoices, isRequired:this.isRequired! })
      }
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
    this.isDeleted = true
    this.createFormsManagementService.listOfCreatingForms.splice(this.index, 1)
    console.log(this.index)
    this.createFormsManagementService.createdQuestionArray?.splice(this.index, 1)
    console.log(this.createFormsManagementService.createdQuestionArray)
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
    // setTimeout(() => {
    //   this.inputRef.nativeElement.focus();
    // }, 0);
    // setTimeout(() => {
    //   let lastInputRef = this.inputRefs.last;
    //   console.log(lastInputRef)
    //   if (lastInputRef) {
    //     lastInputRef.nativeElement.focus();
    //   }
    // }, 0);
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
