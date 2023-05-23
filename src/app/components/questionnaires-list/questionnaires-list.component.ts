import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CloseQuestionnaireDialogComponent } from '../dialogs/close-questionnaire-dialog/close-questionnaire-dialog.component';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.scss']
})
export class QuestionnairesListComponent {

  questionnairesList = [
    {
      id: 0,
      name: 'Testowa ankieta',
      type: 'Osobista',
      personalList: [
        {
          id: 0,
          name: "testowa ankieta osobista nr 1",
        }
      ]
    },
    {
      id: 1,
      name: 'Kolejna ankieta',
      type: 'Ogólna'
    },
  ]

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ){ }

  clickItem(id: number){
    this.router.navigateByUrl('/home/questionnaire');
  }

  openDialogCloseQuestionnaire(enterAnimationDuration: string, exitAnimationDuration: string): void {
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

}
