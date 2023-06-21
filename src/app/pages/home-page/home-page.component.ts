import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/global-services/user-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  @HostListener('window:resize', ['$event'])
     onResize(event: any){
      this.setSizeOptions(window.innerWidth)
   }

  menuMode: MatDrawerMode = 'side'
  menushow?: boolean = true
  nazwa?: string 

  inputs = [
    {
      url: 'form-creator',
      icon: 'post_add',
      name: 'Tworzenie ankiety',
    },
    {
      url: 'form-list',
      icon: 'manage_search',
      name: 'Lista ankiet',
    }
  ]
  constructor(
    private router: Router,
    public userData: UserDataService
  ){ }

  ngOnInit(): void {
    this.checkUserLogin()
    this.setSizeOptions(window.innerWidth);
    if(this.router.url === '/home')
    {
      this.router.navigate(['./home/form-list'])
    }
  }

  checkUserLogin(){
    if (this.userData.isAdmin()) {
      this.inputs.push(
        {
          url: 'admin-panel',
          icon: 'admin_panel_settings',
          name: 'Panel admina',
        }
      )
    }
  }

  setSizeOptions(width: number){
    if(window.innerWidth > 1100){
      this.menuMode = 'side';
      this.menushow = true;
     }
     else{
      this.menuMode = 'over';
      this.menushow = false;
     }

   }

   logout(){
    localStorage.removeItem('auth_app_token_vox')
    this.router.navigateByUrl('/login-page')
   }

}
