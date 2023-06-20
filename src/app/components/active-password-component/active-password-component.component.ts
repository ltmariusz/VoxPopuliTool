import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-active-password-component',
  templateUrl: './active-password-component.component.html',
  styleUrls: ['./active-password-component.component.scss']
})
export class ActivePasswordComponentComponent {
  idParam?: string

  subResetPassword?: Subscription
  loadingResetPassword = false
  customErrorResetPassword?: string

  resetPasswordForm = new FormGroup({
    newPassword1: new FormControl ('', [Validators.required]),
    newPassword2: new FormControl ('', [Validators.required])
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private publicService: PublicService,
    private popupService: PopupManagementService,
  ) { }

  ngOnInit(): void {
    this.checkUrl()
    console.log(this.idParam)
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  submit(){
    let newPassword1 = this.resetPasswordForm.get('newPassword1')!.value;
    let newPassword2 = this.resetPasswordForm.get('newPassword2')!.value;
    if (this.resetPasswordForm.valid && newPassword1 == newPassword2) {
      this.loadingResetPassword = true
      this.subResetPassword = this.publicService.postActivate(this.idParam!, newPassword1!).subscribe({
        next: (response) => {
          if(response.body){
            this.popupService.succesEmit('Hasło zostało pomyślnie nadane!')
            this.router.navigateByUrl('/login-page');
          }
          else{
            this.customErrorResetPassword = 'Brak obiektu odpowiedzi';
            this.popupService.errorEmit(this.customErrorResetPassword)
          }
          this.loadingResetPassword = false
        },
        error: (errorResponse) => {
          this.loadingResetPassword = false
          this.customErrorResetPassword = errorResponse.error.message
          // this.popupService.errorEmit(this.customErrorQuestionaire!)
          this.popupService.errorEmit(errorResponse.error.message)
        },
        complete: () => {
          this.loadingResetPassword = false;
        }
      }) 
    }
    else{
      this.popupService.errorEmit('Hasła muszą być identyczne!')
    }
    if(!this.resetPasswordForm.valid){
      this.popupService.errorEmit('Wypełnij formularz logowania!')
    }
  }
}
