import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){

    }
    intercept(req:any, next:any){
        //    TEST
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJNQjJCLURBU0hCT0FSRC1TRVJWRVIiLCJhdWQiOiJNQjJCLVJFU1QtQ0xJRU5UIiwic3ViIjoiYXJrYWRpdXN6LmJyeXNrYUBkYXctc3lzdGVtcy5wbCIsImV4cCI6MTgyMjYzMDY3Niwicm9sIjpbImFkbWluLWFkZCIsImFkbWluLW1hbmFnZSIsImJyb2NodXJlIiwiY29udHJhY3RvcnMtbm90aWZpY2F0aW9uIiwiY29udHJhY3RvcnMtcGVuZGluZyIsImNvbnRyYWN0b3JzLXJlZ2lzdGVyZWQiLCJjb250cmFjdG9ycy1zciIsImNvbnRyYWN0b3JzLXhsIiwiaW9zLWtleXMiLCJvcmRlcnMtbGlzdCIsInByb2R1Y3RzLWNhdGVnb3JpZXMiLCJwcm9kdWN0cy1wcm9tb3Rpb25zIiwicHJvZHVjdHMtc3luY2VkIiwicHJvbW90aW9ucy1tYW5hZ2UiLCJzeW5jLWZvcmNlIiwic3luYy1tYW51YWwiXX0.t5BUZwlFVx2GvhindWn0MUiHieFR-6Mn86dEMvpA0_JGYl_mCb0iqtIR6LnNbZ-gY8gqj3KMdUeDkhvsi-YrvQ'
        //    MASTER PRODUKCJA 
        // let token = JSON.parse(localStorage.getItem("auth_app_token")!)
        // token = token.value.replace('Bearer ', '')
        if (!token) {
            window.location.assign('/dashboard/pages')
        }
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authRequest)
    }
}