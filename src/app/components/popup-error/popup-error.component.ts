import { Component, OnInit } from '@angular/core';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-popup-error',
  templateUrl: './popup-error.component.html',
  styleUrls: ['./popup-error.component.scss']
})
export class PopupErrorComponent implements OnInit{

  showPopup = false

  errorMassage?: string

  constructor(
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    this.errorEmitSubscribe()
  }

  errorEmitSubscribe(){
    this.popupService.popupErrorEmit.subscribe(res => {
      this.errorMassage = res
      this.showPopup = true
      setTimeout(() => {
        this.showPopup = false
      }, 6000);
    })
  }

  close(){
    this.showPopup = false
  }

}