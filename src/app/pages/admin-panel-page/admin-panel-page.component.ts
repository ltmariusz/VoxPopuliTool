import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent {

  newUserPanel = false

  addNewUser(){
    this.newUserPanel = true
  }

}
