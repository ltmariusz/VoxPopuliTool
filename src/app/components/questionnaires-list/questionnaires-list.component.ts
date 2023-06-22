import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseQuestionnaireDialogComponent } from '../dialogs/close-questionnaire-dialog/close-questionnaire-dialog.component';
import { CloseQuestionnairePersonalDialogComponent } from '../dialogs/close-questionnaire-personal-dialog/close-questionnaire-personal-dialog.component';
import { AnkietaService, QuestionnaireList } from 'src/app/services/ankieta.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { Subscription, lastValueFrom } from 'rxjs';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.scss']
})
export class QuestionnairesListComponent implements OnInit{

  idParam?: string

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 100;

  subAnkietaList?: Subscription
  loadingAnkietaList = false
  usersAnkietaList?: Array<QuestionnaireList>
  customErrorAnkietaList?: string

  subAnkietaListPrivate?: Subscription
  loadingAnkietaListPrivate = false
  usersAnkietaListPrivate?: Array<QuestionnaireList>
  customErrorAnkietaListPrivate?: string

  subAnkietaDeactivate?: Subscription
  loadingAnkietaDeactivate = false
  customErrorAnkietaDeactivate?: string

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private ankietaRest: AnkietaService,
    private popupService: PopupManagementService,
    private questionnaireListManager: QuestionnaireListManagementService,
  ){ }

  ngOnInit(): void {
    this.getAnkietaList()
    this.getQuestionnaireListSubscribe()
  }


  clickItem(id: number){
    this.router.navigateByUrl(`/home/questionnaire/${id}`)
  }

  personalQuestionnaire(id: number){
    this.router.navigateByUrl(`/home/personal-questionnaire/${id}`)
  }

  getAnkietaList(questionnaireTitle?: string, userData?: string, questionnaireDescription?: string, isActive?: boolean){
    this.loadingAnkietaList = true
    this.subAnkietaList = this.ankietaRest.getAnkieta(userData!, questionnaireTitle!, questionnaireDescription!, isActive!).subscribe({
      next: (response) => {
        if(response.body){
          // response.body.sort((b, a) => a.createDate.localeCompare(b.createDate))
          this.usersAnkietaList = response.body
          // this.test()
          // this.changeQuestionnaireList()
          this.loadingAnkietaList = false
        }
        else{
          this.customErrorAnkietaList = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorAnkietaList)
          this.loadingAnkietaList = false
        }
      },
      error: (errorResponse) => {
        this.loadingAnkietaList = false
        this.customErrorAnkietaList = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorAnkietaList!)
      },
      complete: () => {
        this.loadingAnkietaList = false;
      }
    })
  }

  // changeQuestionnaireList(){
  //   this.usersAnkietaPersonalList = this.usersAnkietaList
  //   this.usersAnkietaList = this.usersAnkietaList!.filter(obj => obj.questionnaireType == 'GLOBAL')
  //   this.usersAnkietaPersonalList = this.usersAnkietaPersonalList!.filter(obj => obj.questionnaireType == 'PRIVATE')
  //   // console.log(this.usersAnkietaPersonalList)
  // }

  // test(){
  //   for (let index = 0; index < this.usersAnkietaList!.length; index++) {
  //     this.getPrivateById(this.usersAnkietaList![index].id)
  //   }
  // }

  listPrivate: Array<QuestionnaireList> = []
  downloadedListPrivate = new Map<number,Array<QuestionnaireList> | undefined> 
  // listPrivatePromise = new Map<number,Promise<QuestionnaireList | undefined>>()

  loadingClickedPrivate(id: number){
    this.listPrivate = []
    let exist = this.downloadedListPrivate.get(id)
    if (exist) {
      this.listPrivate = exist
    }
    else{
      this.getPrivateById(id)
    }
  }

  getPrivateById(id: number) {
    // this.listPrivate = []
    this.loadingAnkietaListPrivate = true
    this.subAnkietaListPrivate = this.ankietaRest.getAnkietaIdPrivate(id!).subscribe({
      next: (response) => {
        if(response.body){
          this.listPrivate = response.body
          this.downloadedListPrivate.set(id, response.body)
          // console.log(this.listPrivate)
          this.loadingAnkietaListPrivate = false
        }
        else{
          this.customErrorAnkietaListPrivate = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorAnkietaListPrivate)
          this.loadingAnkietaListPrivate = false
        }
      },
      error: (errorResponse) => {
        this.loadingAnkietaListPrivate = false
        this.customErrorAnkietaListPrivate = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorAnkietaListPrivate!)
      },
      complete: () => {
        this.loadingAnkietaListPrivate = false;
      }
    })


  //   let promise = this.listPrivatePromise.get(id)
  //   if (promise == undefined) {
  //     let newPromise = new Promise<QuestionnaireList | undefined>( async (resolve, reject) => {
  //       try {
  //         let exists = this.listPrivate.find( it => it.id == id)
  //         if (exists) {
  //           return resolve(exists)
  //         }
  //         let response = await lastValueFrom(this.ankietaRest.getAnkietaIdPrivate(id))
  //         this.listPrivate.push(response.body!)
  //         return resolve(response.body!)
  //       } catch (error) {
  //         return reject(error)
  //       }
  //     })
  //     this.listPrivatePromise.set(id, newPromise)
  //     console.log(this.listPrivate)
  //     return newPromise
  //   } else{
  //     return promise
    
  // }

  // getPrivateById(id: number): Promise<any | undefined>{
  //   console.log("test")
  //   let promise = this.listPrivatePromise.get(id)
  //   if (promise == undefined) {
  //     let newPromise = new Promise<any | undefined>( async (resolve, reject) => {
  //       try {
  //         let exists = this.listPrivate.find( it => it.id == id)
  //         if (exists) {
  //           return resolve(exists)
  //         }
  //         let response = await lastValueFrom(this.ankietaRest.getAnkietaIdPrivate(id))
  //         this.listPrivate.push(response.body!)
  //         return resolve(response.body!)
  //       } catch (error) {
  //         return reject(error)
  //       }
  //     })
  //     this.listPrivatePromise.set(id, newPromise)
  //     console.log(this.listPrivate)
  //     return newPromise
  //   } else{
  //     return promise
      
  //   }
    
    // this.loadingAnkietaListPrivate = true
    // let bodyPrivate
    // this.subAnkietaListPrivate = this.ankietaRest.getAnkietaIdPrivate(id!).subscribe({
    //   next: (response) => {
    //     if(response.body){
    //       bodyPrivate = response.body
    //       this.loadingAnkietaListPrivate = false
    //     }
    //     else{
    //       this.customErrorAnkietaListPrivate = 'Brak obiektu odpowiedzi';
    //       this.popupService.errorEmit(this.customErrorAnkietaListPrivate)
    //       this.loadingAnkietaListPrivate = false
    //     }
    //   },
    //   error: (errorResponse) => {
    //     this.loadingAnkietaListPrivate = false
    //     this.customErrorAnkietaListPrivate = errorResponse.error.message
    //     this.popupService.errorEmit(this.customErrorAnkietaListPrivate!)
    //   },
    //   complete: () => {
    //     this.loadingAnkietaListPrivate = false;
    //   }
    // })
  }


  getQuestionnaireListSubscribe(){
    this.questionnaireListManager.questionnaireListEmit.subscribe(res => {
      this.getAnkietaList(res[0], res[1], res[2], res[3])
    })
  }

  openDialogCloseQuestionnaire(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
    const dialogRef = this.dialog.open(CloseQuestionnaireDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.loadingAnkietaDeactivate = true
      this.subAnkietaDeactivate = this.ankietaRest.putAnkietaIdDeactivate(id).subscribe({
        next: (response) => {
          if(response.body){
            this.questionnaireListManager.refreshQuestionnaireList()//TO LOAD OLD FILTER
            this.loadingAnkietaDeactivate = false
          }
          else{
            this.customErrorAnkietaDeactivate = 'Brak obiektu odpowiedzi';
            this.popupService.errorEmit(this.customErrorAnkietaDeactivate)
            this.loadingAnkietaDeactivate = false
          }
        },
        error: (errorResponse) => {
          this.loadingAnkietaDeactivate = false
          this.customErrorAnkietaDeactivate = errorResponse.error.message
          this.popupService.errorEmit(this.customErrorAnkietaDeactivate!)
        },
        complete: () => {
          this.loadingAnkietaDeactivate = false;
        }
      })
        
    
      }
      else{
        // console.log('Anuluj');
      }
    })
  }

  openDialogCloseQuestionnairePersonal(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
    const dialogRef = this.dialog.open(CloseQuestionnairePersonalDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.loadingAnkietaDeactivate = true
      this.subAnkietaDeactivate = this.ankietaRest.putAnkietaIdDeactivate(id).subscribe({
        next: (response) => {
          if(response.body){
            this.questionnaireListManager.refreshQuestionnaireList()//TO LOAD OLD FILTER
            this.loadingAnkietaDeactivate = false
          }
          else{
            this.customErrorAnkietaDeactivate = 'Brak obiektu odpowiedzi';
            this.popupService.errorEmit(this.customErrorAnkietaDeactivate)
            this.loadingAnkietaDeactivate = false
          }
        },
        error: (errorResponse) => {
          this.loadingAnkietaDeactivate = false
          this.customErrorAnkietaDeactivate = errorResponse.error.message
          this.popupService.errorEmit(this.customErrorAnkietaDeactivate!)
        },
        complete: () => {
          this.loadingAnkietaDeactivate = false;
        }
      })
        
    
      }
      else{
        // console.log('Anuluj');
      }
    })
  }

  editQuestionnaire(id: number){

  }

  editQuestionnairePersonal(id: number){

  }

  generatePersonal(id: number){
    this.router.navigateByUrl(`/home/generate-personal-questionnaire/${id}`);
  }

  sendGlobal(id: number){
    this.router.navigateByUrl(`/home/send-global-questionnaire/${id}`);
  }


}
