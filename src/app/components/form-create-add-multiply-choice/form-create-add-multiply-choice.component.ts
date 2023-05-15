import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';
import { Answers } from '../form-create-add-single-choice/form-create-add-single-choice.component';

@Component({
  selector: 'app-form-create-add-multiply-choice',
  templateUrl: './form-create-add-multiply-choice.component.html',
  styleUrls: ['../../../style/style-of-answers.scss']
})
export class FormCreateAddMultiplyChoiceComponent implements OnInit {

  constructor(private createFormsManagementService: CreateFormsManagementService) { }

  indexOfForms!: number
  

  @Input() index!: number;

  multiplyChoiceForm:FormGroup = new FormGroup({
    multiplyChoiceQuestionInput: new FormControl('', [Validators.required]),
    nowyFormControler0: new FormControl('', [Validators.required]) //ZMIENIC NA REAKTYWNE
  })


  answerControlName: any[]= []
  numberOfAnswer: Array<Answers> = [{ last: true }]
  formControlCounter = 1; // Licznik formControlów
  ngOnInit() {
    this.indexOfForms = this.createFormsManagementService.indexOfCreatingForms
    this.createFormsManagementService.indexOfCreatingForms
    console.log(this.indexOfForms)
    console.log(this.index + " przekazany index")
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
    console.log(answer)
    if (answer.last == true) {
      this.addNewFormControl()
      this.numberOfAnswer.push({ last: true })
      
      // this.answerControlName.push()
      this.numberOfAnswer[this.numberOfAnswer.length - 2].last = false
    }
  }
  deleteAnswer(index: number) {
    console.log(index)
    this.numberOfAnswer.splice(index, 1)
  }


  addNewFormControl() {
    console.log(this.multiplyChoiceForm)
    console.log("przed dodaniem")
    const newFormControlName = `nowyFormControler${this.formControlCounter}`;
    const nowyFormControler = new FormControl('', [Validators.required]);
    this.multiplyChoiceForm.addControl(newFormControlName, nowyFormControler);
    this.formControlCounter++;
  
    // Zaktualizuj wartości formularza
    this.multiplyChoiceForm.updateValueAndValidity();



  }
  showAll() {
    const formValues: any = {};
    Object.keys(this.multiplyChoiceForm.controls).forEach(controlName => {
      const control = this.multiplyChoiceForm.get(controlName);
      if (control) {
        formValues[controlName] = control.value;
      }
    });
    console.log(formValues);
  }
}



