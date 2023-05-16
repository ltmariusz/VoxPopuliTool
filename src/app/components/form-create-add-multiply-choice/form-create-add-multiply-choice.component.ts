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

  multiplyAnswer = new FormArray([new FormControl('', Validators.required)]);
  addInputControl() {
    this.multiplyAnswer.push(new FormControl('', Validators.required));
  }



  // multiplyChoiceForm: FormGroup = new FormGroup({
  //   multiplyChoiceQuestionInput: new FormControl('', [Validators.required]),
  //   nowyFormControler0: new FormControl('', [Validators.required]) //ZMIENIC NA REAKTYWNE
  // })

  // answerControlName: any[] = []
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
  }

  createItem(): FormGroup {
    return this.fb.group({
      answerControl: new FormControl('', [Validators.required]),
    })
  }
  get answerControlNames() {
    return this.multiplyChoiceForm.get('answerControlNames') as FormArray;
   }

  // addItem(): void {
  //   this.answerControlNames.push(this.createItem())
  //   console.log(this.multiplyChoiceForm)
  // }
  // removeItem(i:any):void{
  //   this.answerControlNames.removeAt(i)
  // }
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
  clickCreateNewAnswer(answer: any) {
    // this.addItem()
    (this.multiplyChoiceForm.get('answerControlNames') as FormArray).push(this.fb.control(''))
    console.log(this.multiplyChoiceForm)

    // if (answer.last == true) {
    //   // this.addNewFormControl()
    //   this.addItem()

    //   this.numberOfAnswer.push({ last: true })

    //   // this.answerControlName.push()
    //   this.numberOfAnswer[this.numberOfAnswer.length - 2].last = false
    // }
  }
  deleteAnswer(index: number) {
    console.log(index)
    this.numberOfAnswer.splice(index, 1)
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
    console.log("tu")
    console.log(this.multiplyChoiceForm.value)

  }


}
