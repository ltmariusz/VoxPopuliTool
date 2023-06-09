import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  subUserIsLogin?: Subscription
  customErrorUserIsLogin?: string
  loadingUserIsLogin = false

  subLogin?: Subscription
  customErrorLogin?: string
  loadingLogin = false

  loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required])
  })

  constructor( 
    private router: Router,
    private authRest: AuthService,
    private route: ActivatedRoute,
    private popupService: PopupManagementService,
    private userRest: UserService
  ){}

  ngOnInit(): void {
    this.checkUserIsLogin()
  }

  get f() {
    return this.loginForm.controls;
  }


  // submit(){
  //   console.log("test")
  //   console.log(this.loginForm.get('email')?.value!)
  //   this.router.navigateByUrl('/home');
  // }

  checkUserIsLogin(){
    this.subUserIsLogin = this.userRest.getUser().subscribe({
      next: (response) => {
        if(response.body){
          this.router.navigateByUrl('/home');
        }
        else{
          this.customErrorUserIsLogin = 'Brak obiektu odpowiedzi';
        }
      },
      error: (errorResponse) => {
        switch (errorResponse.status) {
          case 400:
          case 401:
          case 403:
            this.loadingUserIsLogin = false;
            break;
          
          default:
            this.customErrorUserIsLogin = 'Błąd serwera'
            break;
        }
        // console.log(this.customError);
      },
      complete: () => {
        this.loadingUserIsLogin = false;
      }
    })
  }

  submit(){
    if (this.loginForm.valid) {
      this.loadingLogin = true
      let loginValue = this.loginForm.get('email')!.value;
      let passwordValue = this.loginForm.get('password')!.value;

      console.log('test')

      this.subLogin = this.authRest.postLogin(loginValue!, passwordValue!).subscribe({
        next: (response) => {
          if(response.body){
            this.router.navigateByUrl('/home');
            localStorage.setItem('auth_app_token_vox', response.body.token)
          }
          else{
            this.customErrorLogin = 'Brak obiektu odpowiedzi';
            this.popupService.errorEmit(this.customErrorLogin)
          }
        },
        error: (errorResponse) => {
          this.loadingLogin = false
          // this.customErrorLogin = errorResponse.error.message
          // console.log(this.customError);
          this.popupService.errorEmit(errorResponse.error.message)
        },
        complete: () => {
          this.loadingLogin = false;
        }
      })
    }
    else{
      this.popupService.errorEmit('Wypełnij formularz logowania!')
    }
  }


}
