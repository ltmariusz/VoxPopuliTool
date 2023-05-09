import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit{

  newUserPanel = false

  formAddUser = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    akronim: new FormControl<string>('', Validators.required),
    mail: new FormControl('', [Validators.email, Validators.required]),
    status: new FormControl<string>('aktywny', Validators.required),
  });

  constructor(

  ){ }

  ngOnInit(): void {
    
  }

  panelNewUserCard(){
    this.newUserPanel = !this.newUserPanel
  }

  addNewUser(){
    if (this.formAddUser.valid) {
      console.log('new user added')
    }
  }

  

}
