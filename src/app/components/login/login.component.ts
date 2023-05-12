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

  subUserLogin?: Subscription
  customErrorUserIsLogin?: string
  loadingUserIsLogin = false

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
    
  }

  get f() {
    return this.loginForm.controls;
  }


  submit(){
    console.log("test")
    console.log(this.loginForm.get('email')?.value!)
    this.router.navigateByUrl('/home');
  }

  // checkUserIsLogin(){
  //     this.subUserLogin = this.authRest.getUser().subscribe({
  //       next: (response) => {
  //         if(response.body){
  //           this.router.navigateByUrl('/home');
  //         }
  //         else{
  //           this.customErrorUserIsLogin = 'Brak obiektu odpowiedzi';
  //         }
  //       },
  //       error: (errorResponse) => {
  //         switch (errorResponse.status) {
  //           case 400:
  //           case 401:
  //           case 403:
  //             this.loadingUserIsLogin = false;
  //             break;
          
  //           default:
  //             this.customErrorUserIsLogin = 'Błąd serwera'
  //             break;
  //         }
  //         // console.log(this.customError);
  //       },
  //       complete: () => {
  //         this.loadingUserIsLogin = false;
  //       }
  //     }
  //   )
  // }

  submitDONE(){

  }


}
