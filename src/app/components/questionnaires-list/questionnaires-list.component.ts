import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CloseQuestionnaireDialogComponent } from '../dialogs/close-questionnaire-dialog/close-questionnaire-dialog.component';
import { CloseQuestionnairePersonalDialogComponent } from '../dialogs/close-questionnaire-personal-dialog/close-questionnaire-personal-dialog.component';
import { AnkietaService, QuestionnaireList } from 'src/app/services/ankieta.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { Subscription } from 'rxjs';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.scss']
})
export class QuestionnairesListComponent implements OnInit{

  questionnairesList = [
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista',
      status: 'publiczna',
      personalList: [
        {
          id: 0,
          name: "testowa ankieta osobista nr 1",
        },
        {
          id: 1,
          name: "super nowa jak supernowa",
        }
      ]
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista',
      status: 'publiczna',
      personalList: [
        {
          id: 0,
          name: "testowa ankieta osobista nr 1",
        },
        {
          id: 1,
          name: "super nowa jak supernowa",
        }
      ]
    },
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista',
      status: 'prywatna',
      personalList: [
        {
          id: 0,
          name: "testowa ankieta osobista nr 1",
        },
        {
          id: 1,
          name: "super nowa jak supernowa",
        }
      ]
    },
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista',
      status: 'prywatna',
      personalList: [
        {
          id: 0,
          name: "testowa ankieta osobista nr 1",
        },
        {
          id: 1,
          name: "super nowa jak supernowa",
        }
      ]
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna',
      status: 'prywatna',
    },
  ]

  subAnkietaList?: Subscription
  loadingAnkietaList = false
  usersAnkietaList?: Array<QuestionnaireList>
  customErrorAnkietaList?: string

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private ankietaRest: AnkietaService,
    private popupService: PopupManagementService,
    private questionnaireListManager: QuestionnaireListManagementService
  ){ }

  ngOnInit(): void {
    this.getAnkietaList()
    this.getQuestionnaireListSubscribe()
  }

  clickItem(id: number){
    this.router.navigateByUrl('/home/questionnaire')
  }

  personalQuestionnaire(id: number){
    this.router.navigateByUrl('/home/personal-questionnaire')
  }

  getAnkietaList(questionnaireTitle?: string, userData?: string, questionnaireDescription?: string, isActive?: boolean){
    this.loadingAnkietaList = true
    this.subAnkietaList = this.ankietaRest.getAnkieta(userData!, questionnaireTitle!, questionnaireDescription!, isActive!).subscribe({
      next: (response) => {
        if(response.body){
          this.usersAnkietaList = response.body
          console.log(this.usersAnkietaList)
        }
        else{
          this.customErrorAnkietaList = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorAnkietaList)
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
    // dialogRef.afterClosed().subscribe(result =>{
    //   if (result) {
    //     //console.log(result)
    //     if (this.addRedirectionForm.valid) {
    //       this.loading = true;
          
    //       let fromEmployeeId = this.addRedirectionForm.get('selected')!.value;
    //       let toEmployeeId = this.addRedirectionForm.get('selectedSecond')!.value;
    //       let fromDate = this.addRedirectionForm.get('fromDate')!.value;
    //       let toDate = this.addRedirectionForm.get('toDate')!.value;

    //         this.subRedirectionCreate = this.redirectionRest.postRedirectionCreate(fromEmployeeId!.id, toEmployeeId!.id, fromDate!, toDate!).subscribe({
    //           next: (response) => {
    //             if(response.body){
    //               this.hideCard.emit();
                  

    //             }
    //             else{
    //               this.customError = 'Brak obiektu odpowiedzi';
    //               this.loading = false;
    //             }
    //           },
    //           error: (errorResponse) => {
    //             switch (errorResponse.status) {
    //               case 400:
    //               case 401:
    //               case 403:
    //               //case 404:
    //                 this.customError = errorResponse.error.message;
    //                 this.loading = false;
    //                 break;
                
    //               default:
    //                 this.customError = 'Błąd serwera'
    //                 this.loading = false;
    //                 break;
    //             }
    //             // console.log(this.customError);
    //           },
    //           complete: () => {
    //             this.loading = false;
    //             this.userListManager.listRefresh.next(true);
    //           }
    //         }
    //       )
    //       }
    //   }
    //   else{
    //     // console.log('Anuluj');
    //   }
    // })
  }

  openDialogCloseQuestionnairePersonal(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
    const dialogRef = this.dialog.open(CloseQuestionnairePersonalDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    // dialogRef.afterClosed().subscribe(result =>{
    //   if (result) {
    //     //console.log(result)
    //     if (this.addRedirectionForm.valid) {
    //       this.loading = true;
          
    //       let fromEmployeeId = this.addRedirectionForm.get('selected')!.value;
    //       let toEmployeeId = this.addRedirectionForm.get('selectedSecond')!.value;
    //       let fromDate = this.addRedirectionForm.get('fromDate')!.value;
    //       let toDate = this.addRedirectionForm.get('toDate')!.value;

    //         this.subRedirectionCreate = this.redirectionRest.postRedirectionCreate(fromEmployeeId!.id, toEmployeeId!.id, fromDate!, toDate!).subscribe({
    //           next: (response) => {
    //             if(response.body){
    //               this.hideCard.emit();
                  

    //             }
    //             else{
    //               this.customError = 'Brak obiektu odpowiedzi';
    //               this.loading = false;
    //             }
    //           },
    //           error: (errorResponse) => {
    //             switch (errorResponse.status) {
    //               case 400:
    //               case 401:
    //               case 403:
    //               //case 404:
    //                 this.customError = errorResponse.error.message;
    //                 this.loading = false;
    //                 break;
                
    //               default:
    //                 this.customError = 'Błąd serwera'
    //                 this.loading = false;
    //                 break;
    //             }
    //             // console.log(this.customError);
    //           },
    //           complete: () => {
    //             this.loading = false;
    //             this.userListManager.listRefresh.next(true);
    //           }
    //         }
    //       )
    //       }
    //   }
    //   else{
    //     // console.log('Anuluj');
    //   }
    // })
  }

  editQuestionnaire(id: number){

  }

  editQuestionnairePersonal(id: number){

  }

  generatePersonal(id: number){
    this.router.navigateByUrl('/home/generate-personal-questionnaire');
  }

}
