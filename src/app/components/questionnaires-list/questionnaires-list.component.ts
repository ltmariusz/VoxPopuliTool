import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CloseQuestionnaireDialogComponent } from '../dialogs/close-questionnaire-dialog/close-questionnaire-dialog.component';
import { CloseQuestionnairePersonalDialogComponent } from '../dialogs/close-questionnaire-personal-dialog/close-questionnaire-personal-dialog.component';
import { AnkietaService, QuestionnaireList } from 'src/app/services/ankieta.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { Subscription } from 'rxjs';
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
  usersAnkietaPersonalList?: Array<QuestionnaireList>
  customErrorAnkietaList?: string

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
          response.body.sort((b, a) => a.createDate.localeCompare(b.createDate))
          this.usersAnkietaList = response.body
          this.createPersonalQuestionnaireList()
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

  createPersonalQuestionnaireList(){
    this.usersAnkietaPersonalList = this.usersAnkietaList
    this.usersAnkietaPersonalList = this.usersAnkietaPersonalList!.filter(obj => obj.questionnaireType == 'PRIVATE')
    // console.log(this.usersAnkietaPersonalList)
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
