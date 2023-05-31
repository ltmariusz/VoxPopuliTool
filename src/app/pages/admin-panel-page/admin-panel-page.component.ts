import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { AdminPanelManagementService } from 'src/app/services/management/admin-panel-management.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit{

  newUserPanel = false

  subCreateUser?: Subscription
  loadingCreateUser = false
  customCreateUser?: string

  formAddUser = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    surname: new FormControl<string>('', Validators.required),
    role: new FormControl<string>('USER', Validators.required),
    phone: new FormControl<number|null>(null),
    mail: new FormControl('', [Validators.email, Validators.required]),
    position: new FormControl<string>(''),
  });

  constructor(
    private adminRest: AdminService,
    private adminPanelManagementService: AdminPanelManagementService,
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    
  }

  panelNewUserCard(){
    this.newUserPanel = !this.newUserPanel
    this.resetForm()
  }

  addNewUser(){
    if (this.formAddUser.valid) {
      this.loadingCreateUser = true
      let name = this.formAddUser.get('name')!.value
      let surname = this.formAddUser.get('surname')!.value
      let role = this.formAddUser.get('role')!.value
      let phone = this.formAddUser.get('phone')!.value
      let mail = this.formAddUser.get('mail')!.value
      let position = this.formAddUser.get('position')!.value

      this.subCreateUser = this.adminRest.postUserCreate(name!, surname!, mail!, role!, phone!, position!).subscribe({
        next: (response) => {
          if(response.body){
            this.loadingCreateUser = false
            this.adminPanelManagementService.getUserList()
            this.resetForm()
            this.popupService.doneEmit('Dodano nowego użytkownika')
          }
          else{
            this.customCreateUser = 'Brak obiektu odpowiedzi';
            this.popupService.errorEmit(this.customCreateUser)
          }
        },
        error: (errorResponse) => {
          this.loadingCreateUser = false
          this.customCreateUser = errorResponse.error.message
          this.popupService.errorEmit(this.customCreateUser!)
          // console.log(this.customError);
        },
        complete: () => {
          this.loadingCreateUser = false;
        }
      })
    }
  }

  resetForm(){
    this.formAddUser.controls['name'].setValue('')
    this.formAddUser.controls['surname'].setValue('')
    this.formAddUser.controls['role'].setValue('USER')
    this.formAddUser.controls['phone'].setValue(null)
    this.formAddUser.controls['mail'].setValue('')
    this.formAddUser.controls['position'].setValue('')

    this.formAddUser.controls['name'].setErrors(null)
    this.formAddUser.controls['surname'].setErrors(null)
    this.formAddUser.controls['role'].setErrors(null)
    this.formAddUser.controls['phone'].setErrors(null)
    this.formAddUser.controls['mail'].setErrors(null)
    this.formAddUser.controls['position'].setErrors(null)
    this.formAddUser.reset()
  }

  

}
