import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-reminder-password',
  templateUrl: './reminder-password.component.html',
  styleUrls: ['./reminder-password.component.scss']
})
export class ReminderPasswordComponent implements OnInit{

  loading = false
  subRemindPassword?: Subscription
  customError?: string

  remindForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  constructor(
    private publicService: PublicService,
    private router: Router,
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    
  }

  submit(){
    if(this.remindForm.valid){
      this.loading = true;
      let emailValue = this.remindForm.get('email')!.value;
        this.subRemindPassword = this.publicService.postRemindPassword(emailValue!).subscribe({
          next: (response) => {
            this.loading = false;
            this.popupService.succesEmit('Mail z linkiem do zmiany hasła został wysłany!')
            this.router.navigateByUrl('/login-page');
          },
          error: (errorResponse) => {
            // console.log(errorResponse);
            this.customError = errorResponse.error.message;
            this.loading = false;
            this.popupService.errorEmit(errorResponse.error.message)
          },
          complete: () => {
            
          }
        }
      )
    }
    else{
      this.popupService.errorEmit('Wypełnij formularz zmiany hasła!')
    }
  }

  get f(){
    return this.remindForm.controls;
  }

}
