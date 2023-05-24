import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

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
    },
    {
      url: 'admin-panel',
      icon: 'admin_panel_settings',
      name: 'Panel admina',
    }
  ]

  ngOnInit(): void {
    this.setSizeOptions(window.innerWidth);
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
}
