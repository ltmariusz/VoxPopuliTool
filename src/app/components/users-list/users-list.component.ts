import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiveUserDialogComponent } from '../dialogs/active-user-dialog/active-user-dialog.component';
import { NewPasswordDialogComponent } from '../dialogs/new-password-dialog/new-password-dialog.component';
import { Subscription } from 'rxjs';
import { AdminService, User } from 'src/app/services/admin.service';
import { AdminPanelManagementService } from 'src/app/services/management/admin-panel-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { ChangeRoleDialogComponent } from '../dialogs/change-role-dialog/change-role-dialog.component';
import { DeactivateDialogComponent } from '../dialogs/deactivate-dialog/deactivate-dialog.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{

  subUsersList?: Subscription
  loadingUsersList = false
  customErrorUsersList?: string

  subUserActivate?: Subscription
  loadingUserActivate = false
  customErrorUserActivate?: string

  subUserChangeRole?: Subscription
  customErrorChangeRole?: string
  loadingChangeRole = false

  subUserDeactivate?: Subscription
  customErrorUserDeactivate?: string
  loadingUserDeactivate = false

  usersList?: Array<User>

  constructor(
    public dialog: MatDialog,
    private adminRest: AdminService,
    private adminPanelManagementService: AdminPanelManagementService,
    private popupService: PopupManagementService
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
          this.popupService.errorEmit(this.customErrorUsersList)
        }
      },
      error: (errorResponse) => {
        this.loadingUsersList = false
        this.customErrorUsersList = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorUsersList!)
      },
      complete: () => {
        this.loadingUsersList = false;
      }
    })
  }

  openDialogNewPassword(enterAnimationDuration: string, exitAnimationDuration: string, userId: number): void {
    const dialogRef = this.dialog.open(NewPasswordDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
     if (result) {
      this.loadingUserActivate = true;
      let password = result.password
      console.log(password)
      this.subUserActivate = this.adminRest.putUserChangePassword(userId!, password).subscribe({
        next: (response) => {
          if(response.body){
            console.log(response.body)
            // this.getUsersList()
            this.popupService.succesEmit('Hasło zostało zmienione')
          }
          else{
            this.customErrorUserActivate = 'Brak obiektu odpowiedzi';
            this.loadingUserActivate = false;
          }
        },
        error: (errorResponse) => {
          this.customErrorUserActivate = errorResponse.error.message;
          this.loadingUserActivate = false;
          this.popupService.errorEmit(this.customErrorUserActivate!)
        },
        complete: () => {
          this.loadingUserActivate = false;
        }
      })
    }
  })
  }

  openDialogActiveUser(enterAnimationDuration: string, exitAnimationDuration: string, userId: number): void {
    const dialogRef = this.dialog.open(ActiveUserDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.loadingUserActivate = true;
        this.subUserActivate = this.adminRest.putUserActivete(userId!).subscribe({
          next: (response) => {
            if(response.body){
              console.log(response.body)
              this.getUsersList()
              this.popupService.succesEmit('Aktywowano użytkownika')
            }
            else{
              this.customErrorUserActivate = 'Brak obiektu odpowiedzi';
              this.loadingUserActivate = false;
            }
          },
          error: (errorResponse) => {
            this.customErrorUserActivate = errorResponse.error.message;
            this.loadingUserActivate = false;
            this.popupService.errorEmit(this.customErrorUserActivate!)
          },
          complete: () => {
            this.loadingUserActivate = false;
          }
        })
      }
    })
  }

  openDialogChangeRole(enterAnimationDuration: string, exitAnimationDuration: string, userId: number, userRole: string): void {
    const dialogRef = this.dialog.open(ChangeRoleDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.loadingChangeRole = true;
        let role = ''
        if (userRole == 'USER') {
          role = 'ADMIN'
        }
        else if(userRole == 'ADMIN'){
          role = 'USER'
        }
        this.subUserChangeRole = this.adminRest.putUserChangeRole(userId!, role).subscribe({
          next: (response) => {
            if(response.body){
              console.log(response.body)
              this.getUsersList()
              this.popupService.succesEmit(response.body.message)
            }
            else{
              this.loadingChangeRole = false;
            }
          },
          error: (errorResponse) => {
            this.customErrorChangeRole = errorResponse.error.message;
            this.loadingChangeRole = false;
            this.popupService.errorEmit(this.customErrorChangeRole!)
          },
          complete: () => {
            this.loadingChangeRole = false;
          }
        })
      }
    })
  }

  openDialogDeactivateUser(enterAnimationDuration: string, exitAnimationDuration: string, userId: number): void {
    const dialogRef = this.dialog.open(DeactivateDialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.loadingUserDeactivate = true;
        this.subUserDeactivate = this.adminRest.putUserDeactivate(userId!).subscribe({
          next: (response) => {
            if(response.body){
              console.log(response.body)
              this.getUsersList()
              this.popupService.succesEmit(response.body.message)
            }
            else{
              this.loadingUserDeactivate = false;
            }
          },
          error: (errorResponse) => {
            this.customErrorUserDeactivate = errorResponse.error.message;
            this.loadingUserDeactivate = false;
            this.popupService.errorEmit(this.customErrorUserDeactivate!)
          },
          complete: () => {
            this.loadingUserDeactivate = false;
          }
        })
      }
    })
  }

}

