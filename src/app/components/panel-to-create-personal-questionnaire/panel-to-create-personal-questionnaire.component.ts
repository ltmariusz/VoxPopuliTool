import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnkietaService, Questionnaire } from 'src/app/services/ankieta.service';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-panel-to-create-personal-questionnaire',
  templateUrl: './panel-to-create-personal-questionnaire.component.html',
  styleUrls: ['./panel-to-create-personal-questionnaire.component.scss']
})
export class PanelToCreatePersonalQuestionnaireComponent implements OnInit, OnDestroy{

  subQuestionnairePrivate?: Subscription
  customErrorQuestionnairePrivate?: string
  loadingQuestionnairePrivate = false

  subEventEmitterListManagment?: Subscription

  idParam?: string

  subQuestionaire?: Subscription
  questionaire?: Questionnaire
  loadingQuestionaire = false
  customErrorQuestionaire?: string

  personalForm = new FormGroup({
    description: new FormControl ('', [Validators.required])
  })

  keyInputs = this.fb.group({
    input: this.fb.array([]),
    phone: this.fb.array([]),
    mail: this.fb.array([])
  });

  question?: string

  constructor(
    private allFormsManagementService: AllFormsManagementService,
    private fb:FormBuilder,
    private questionnaireListManager: QuestionnaireListManagementService,
    private popupService: PopupManagementService,
    private ankietaRest: AnkietaService,
    private router: Router,
    private route: ActivatedRoute,
    ){ }

  ngOnInit(): void {
    this.checkUrl()
    this.getQuestionaire()
    // this.personalForm.controls.description.setValue(this.questionaire?.description!);
    this.liveUpdateDescription()
    this.postQuestionnairePrivateSubscribe()
  }

  ngOnDestroy(): void {
    this.subEventEmitterListManagment?.unsubscribe()
  }

  liveUpdateDescription(){
    this.personalForm.get('description')!.valueChanges.subscribe(value => {
      this.allFormsManagementService.updateLiveDescription(value!)
      // this.allFormsManagementService.exampleOfForm2.description = value!
      // console.log(this.allFormsManagementService.exampleOfForm2.description)
    });
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  getQuestionaire(){
    this.loadingQuestionaire = true
    this.subQuestionaire = this.ankietaRest.getAnkietaId(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionaire = response.body
          this.personalForm.controls.description.setValue(this.questionaire?.description!);
        }
        else{
          this.customErrorQuestionaire = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionaire)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionaire = false
        this.customErrorQuestionaire = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionaire!)
      },
      complete: () => {
        this.loadingQuestionaire = false;
      }
    })
  }

  addMetadate() {
    const inputForm = this.fb.group({
        key: new FormControl('', [Validators.required]),
        value: new FormControl('', [Validators.required])
    });
  
    this.input.push(inputForm);
  }

  addPhone() {
    const phoneForm = this.fb.group({
        number: new FormControl<number|null>(null, [Validators.required]),
    });
  
    this.phone.push(phoneForm);
  }

  addMail() {
    const mailForm = this.fb.group({
        mail: new FormControl('', [Validators.required, Validators.email]),
    });
  
    this.mail.push(mailForm);
  }

  deleteMetadate(i: any){
    this.input.removeAt(i);
  }

  deletePhone(i: any){
    this.phone.removeAt(i);
  }

  deleteMail(i: any){
    this.mail.removeAt(i);
  }

  get input() {
    return this.keyInputs.controls["input"] as FormArray;
  }

  get phone() {
    return this.keyInputs.controls["phone"] as FormArray;
  }

  get mail() {
    return this.keyInputs.controls["mail"] as FormArray;
  }

  isKeyArrayEmpty() {
    return this.input.length === 0;
  }

  isPhoneArrayIsEmpty(){
    return this.phone.length === 0;
  }

  isMailArrayIsEmpty(){
    return this.mail.length === 0;
  }

  postQuestionnairePrivateSubscribe(){
    this.subEventEmitterListManagment = this.questionnaireListManager.questionnairePrivateEmit.subscribe(res => {
      this.postAnkietaPrivate()
      console.log('test')
    })
  }

  postAnkietaPrivate(){
    let description = this.personalForm.get('description')!.value

    let phoneList = []
    var phoneArray = this.keyInputs.get('phone') as FormArray;

    for (let i = 0; i < this.phone.length; i++) {
      var item = phoneArray.at(i).value.number
      phoneList.push(item);
    }

    console.log(phoneList)

    let mailList = []
    var mailArray = this.keyInputs.get('mail') as FormArray;
    
    for (let i = 0; i < this.mail.length; i++) {
      var item = mailArray.at(i).value.mail
      mailList.push(item);
    }

    console.log(mailList)

    let inputList = []
    var inputArray = this.keyInputs.get('input') as FormArray;
    
    for (let i = 0; i < this.input.length; i++) {
      var item1 = inputArray.at(i).value.key
      var item2 = inputArray.at(i).value.value

      let item = {
        key: item1,
        value: item2
      }
      inputList.push(item);
    }

    console.log(inputList)

    this.loadingQuestionnairePrivate = true
    this.questionnaireListManager.loadingSendPrivateQuestionnaire = true
    this.subQuestionnairePrivate = this.ankietaRest.postAnkietaPrivate(Number(this.idParam), description!, mailList!, phoneList!, inputList).subscribe({
      next: (response) => {
        if(response.body){
          this.questionnaireListManager.loadingSendPrivateQuestionnaire = false
          this.popupService.succesEmit('Pomyślnie utworzono osobistą ankietę')
          this.router.navigateByUrl('/home/form-list')
          
        }
        else{
          this.customErrorQuestionnairePrivate = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionnairePrivate)
          this.questionnaireListManager.loadingSendPrivateQuestionnaire = false
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionnairePrivate = false
        this.questionnaireListManager.loadingSendPrivateQuestionnaire = false
        this.customErrorQuestionnairePrivate = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionnairePrivate!)
      },
      complete: () => {
        this.loadingQuestionnairePrivate = false;
        this.questionnaireListManager.loadingSendPrivateQuestionnaire = false
      }
    })

  }

}
