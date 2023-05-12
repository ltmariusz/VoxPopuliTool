import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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
  ){}

  ngOnInit(): void {
    this.checkUserIsLogin()
  }

  get f() {
    return this.loginForm.controls;
  }


  submit(){
    console.log("test")
    console.log(this.loginForm.get('email')?.value!)
    this.router.navigateByUrl('/home');
  }

  checkUserIsLogin(){
    this.subUserIsLogin = this.authRest.getUser().subscribe({
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

  submitDONE(){
    this.subLogin = this.authRest.getUser().subscribe({
      next: (response) => {
        if(response.body){
          this.router.navigateByUrl('/home');
        }
        else{
          this.customErrorLogin = 'Brak obiektu odpowiedzi';
        }
      },
      error: (errorResponse) => {
        switch (errorResponse.status) {
          case 400:
          case 401:
          case 403:
            this.loadingLogin = false;
            break;
        
          default:
            this.customErrorLogin = 'Błąd serwera'
            break;
        }
        // console.log(this.customError);
      },
      complete: () => {
        this.loadingLogin = false;
      }
    })
  }


}
