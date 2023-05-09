import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewPasswordDialogComponent } from 'src/app/components/dialogs/new-password-dialog/new-password-dialog.component';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit{

  newUserPanel = false

  formAddUser = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    akronim: new FormControl<string>('', Validators.required),
    mail: new FormControl('', [Validators.email, Validators.required]),
    status: new FormControl<string>('aktywny', Validators.required),
  });

  constructor(
    public dialog: MatDialog,
  ){ }

  ngOnInit(): void {
    
  }

  panelNewUserCard(){
    this.newUserPanel = !this.newUserPanel
  }

  addNewUser(){
    if (this.formAddUser.valid) {
      console.log('new user added')
      this.openDialogNewPassword('200ms', '100ms')
    }
  }

  openDialogNewPassword(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(NewPasswordDialogComponent, {
      width: '250px',
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
