import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiveUserDialogComponent } from '../dialogs/active-user-dialog/active-user-dialog.component';
import { NewPasswordDialogComponent } from '../dialogs/new-password-dialog/new-password-dialog.component';
import { Subscription } from 'rxjs';
import { AdminService, User } from 'src/app/services/admin.service';
import { AdminPanelManagementService } from 'src/app/services/management/admin-panel-management.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{

  subUsersList?: Subscription
  loadingUsersList = false
  customErrorUsersList?: string

  usersList?: Array<User>

  constructor(
    public dialog: MatDialog,
    private adminRest: AdminService,
    private adminPanelManagementService: AdminPanelManagementService
  ){ }

  ngOnInit(): void {
    this.getUsersList()
    this.refreshUserListFromEmit()
  }

  editUser(id: number){

  }

  refreshUserListFromEmit(){
    this.adminPanelManagementService.emitUsersList.subscribe(res => {
      this.getUsersList()
    })
  }

  getUsersList(){
    this.loadingUsersList = true
    this.subUsersList = this.adminRest.getUsers().subscribe({
      next: (response) => {
        if(response.body){
          this.usersList = response.body
        }
        else{
          this.customErrorUsersList = 'Brak obiektu odpowiedzi';
        }
      },
      error: (errorResponse) => {
        this.loadingUsersList = false
        this.customErrorUsersList = errorResponse.error.message
      },
      complete: () => {
        this.loadingUsersList = false;
      }
    })
  }

  openDialogNewPassword(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(NewPasswordDialogComponent, {
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

  openDialogActiveUser(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ActiveUserDialogComponent, {
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

