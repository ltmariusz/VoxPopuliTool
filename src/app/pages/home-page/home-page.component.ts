import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {


  menuMode: MatDrawerMode = 'side'
  menushow?: boolean 
  nazwa?: string 

  inputs = [
    {
      url: 'form-creator',
      icon: 'post_add',
      name: 'Tworzenie ankiety',
    },
    {
      url: 'form-list',
      icon: 'post_add',
      name: 'Lista ankiet',
    }
  ]
}
