import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserDataService } from '../services/global-services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(
    // private userGlobalService: UserDataService,
    private userRest: UserService,
    private router: Router,
    private user: UserDataService,
  ){}
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let onlyAdmin = childRoute.data['onlyAdmin'] as boolean
      
    return this.check(onlyAdmin);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let onlyAdmin = route.data['onlyAdmin'] as boolean
      
    return this.check(onlyAdmin);
  }
      // return this.check()
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.check(false)
  }
  private check(onlyAdmin: boolean):Promise<boolean>{
    return new Promise<boolean>((resolve, rejects) => {
      this.userRest.getUser()
      .subscribe({
        next: (response) => {
          if(response.body){
            if(onlyAdmin){
              if(response.body.role == 'ADMIN'){
                this.user.setUser(response.body);
                resolve(true)
              }
              else{
                this.router.navigateByUrl('/login');
                resolve(false)
              }
            }
            else{
              this.user.setUser(response.body);
              resolve(true)
            }
          }
          else{
            this.router.navigateByUrl('/login');
            resolve(false)
          }
        },
        error: (errorResponse) => {
          this.router.navigateByUrl('/login');
          resolve(false)

        },
        complete: () => {

        }
      }
    )
    }
  )}
  
}
