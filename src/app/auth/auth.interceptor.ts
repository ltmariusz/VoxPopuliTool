import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private router: Router
    ){

    }
    // intercept(req:any, next:any){
    //     //    TEST
    //     // var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJNQjJCLURBU0hCT0FSRC1TRVJWRVIiLCJhdWQiOiJNQjJCLVJFU1QtQ0xJRU5UIiwic3ViIjoiYXJrYWRpdXN6LmJyeXNrYUBkYXctc3lzdGVtcy5wbCIsImV4cCI6MTgyMjYzMDY3Niwicm9sIjpbImFkbWluLWFkZCIsImFkbWluLW1hbmFnZSIsImJyb2NodXJlIiwiY29udHJhY3RvcnMtbm90aWZpY2F0aW9uIiwiY29udHJhY3RvcnMtcGVuZGluZyIsImNvbnRyYWN0b3JzLXJlZ2lzdGVyZWQiLCJjb250cmFjdG9ycy1zciIsImNvbnRyYWN0b3JzLXhsIiwiaW9zLWtleXMiLCJvcmRlcnMtbGlzdCIsInByb2R1Y3RzLWNhdGVnb3JpZXMiLCJwcm9kdWN0cy1wcm9tb3Rpb25zIiwicHJvZHVjdHMtc3luY2VkIiwicHJvbW90aW9ucy1tYW5hZ2UiLCJzeW5jLWZvcmNlIiwic3luYy1tYW51YWwiXX0.t5BUZwlFVx2GvhindWn0MUiHieFR-6Mn86dEMvpA0_JGYl_mCb0iqtIR6LnNbZ-gY8gqj3KMdUeDkhvsi-YrvQ'
    //     //    MASTER PRODUKCJA 
    //     let token = localStorage.getItem('auth_app_token_vox')
    //     console.log(token)
    //     console.log(localStorage.getItem('auth_app_token_vox'))
    //     token = token!.replace('Bearer ', '')
    //     // if (!token) {
    //     //     window.location.assign('/login-page')
    //     // }
    //     var authRequest = req.clone({
    //         headers: req.headers.set('Authorization', `Bearer ${token}`)
    //     })
    //     return next.handle(authRequest)
    // }

    intercept(request: HttpRequest<any>, next: any) {  
        let token = localStorage.getItem('auth_app_token_vox')

        // token = token!.replace('Bearer ', '')
    
       if (token) {
        
         // If we have a token, we set it to the header
         request = request.clone({
            setHeaders: {Authorization: `${token}`}
         });
      }
    
      return next.handle(request).pipe(
          catchError((err) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                // redirect user to the logout page
             }
          }
          return throwError(err);
        })
       )
      }










    // intercept(req: HttpRequest<any>, next: HttpHandler) {
    //     return next.handle(req).pipe(
    //       catchError((error: HttpErrorResponse) => {
    //         if (error.status === 401) {
    //           this.router.navigate(['/login']);
    //         }
    //         if (error.status === 403) {
    //             this.router.navigate(['/login']);
    //           }
    //         throw error;
    //       })
    //     );
    //   }
}