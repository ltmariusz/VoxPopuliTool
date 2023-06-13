import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnkietaService, FormIdQuestion } from 'src/app/services/ankieta.service';
import { AllFormsManagementService, OneQuestion } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  constructor(public allFormsManagementService: AllFormsManagementService,
    private route: ActivatedRoute,
    private ankietaService: AnkietaService) { }

    listOfQuestionToShow!: Array<OneQuestion>
    listOfQuestion: Array<FormIdQuestion> = new Array
    
  titleForm!: string
  descriptionForm!: string
  didYouEndAnswering?:boolean
  formFromUrl!:string

  ngOnInit() {
    // console.log(this.allFormsManagementService.exampleOfForm2)
    this.formFromUrl = ""
    this.route.paramMap.subscribe(params => {
      this.formFromUrl = params.get('id')!;
      console.log(this.formFromUrl)})

    this.ankietaService.getPublicAnkietaUuid(this.formFromUrl).subscribe({
      next:(response)=>{
        
        if(response.body!.questionnaireType != "GLOBAL"){
          //Sprawdzić czy osoba jest autoryzowana
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
        
        /**
         * Sprawdzam czy ankieta jest aktywna
         */
        // if(response.body!.isActive===false){
        //   console.log("koniec")
        //   this.titleForm = "Ankieta jest nie aktywna"
        //   return
        // }

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //Sprawdzanie czy uytkownik może z niej skorzystać!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        console.log("Lecim dalej")
        
        console.log(response.body)
        this.titleForm = response.body!.title
        this.descriptionForm = response.body!.description
        this.ankietaService.getPublicAnkietaUuidQuestion(this.formFromUrl).subscribe({
          next:(response)=>{
            console.log(response.body!)
            for (let i = 0; i < response.body!.length; i++) {
              const element = response.body![i];
              console.log(element)
              this.listOfQuestion.push(element) 
            }
            console.log(this.listOfQuestion)
          },
          error:() =>{},
          complete: () =>{}
        })
        response.body!
        response.body!
        // this.ankietaService.
      },
      error:(error) =>{
        console.log(error)
        console.log("być moe nie znaleziono linku")
      },
      complete: () =>{}
    })
    console.log()
    this.didYouEndAnswering=false
    this.allFormsManagementService.didYouEndAnswering = this.didYouEndAnswering
  ///////
    // this.descriptionForm = this.allFormsManagementService.exampleOfForm2.description
    // this.listOfQuestionToShow = this.allFormsManagementService.exampleOfForm2.questions
  
    this.route.paramMap.subscribe(params => {
      let formFromUrl = params.get('id');
      console.log(formFromUrl)
      if(formFromUrl=="exampleRateDelivery"){
        this.titleForm = this.allFormsManagementService.exampleRateDelivery.title
        this.descriptionForm = this.allFormsManagementService.exampleRateDelivery.description
        this.listOfQuestionToShow = this.allFormsManagementService.exampleRateDelivery.questions
      }else if(formFromUrl=="exampleRateVisit"){
        this.titleForm = this.allFormsManagementService.exampleRateVisit.title
        this.descriptionForm = this.allFormsManagementService.exampleRateVisit.description
        this.listOfQuestionToShow = this.allFormsManagementService.exampleRateVisit.questions
      }
      // Wykonaj operacje na myVariable
    });
  
  }

}