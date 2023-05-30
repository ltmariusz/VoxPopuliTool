import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
          },
          error: (errorResponse) => {
            // console.log(errorResponse);
            switch (errorResponse.status) {
              case 403:
                this.customError = errorResponse.error.message;
                this.loading = false;
                break;
              case 404:
                this.customError = errorResponse.error.message;
                this.loading = false;
                break;
            
              default:
                this.customError = 'Błąd serwera'
                this.loading = false;
                break;
            }
          },
          complete: () => {
            
          }
        }
      )
    }
  }

  get f(){
    return this.remindForm.controls;
  }

}
