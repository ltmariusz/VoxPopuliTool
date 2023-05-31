import { Component, OnInit } from '@angular/core';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-popup-done',
  templateUrl: './popup-done.component.html',
  styleUrls: ['./popup-done.component.scss']
})
export class PopupDoneComponent implements OnInit{

  showPopup = false

  doneMassage?: string

  constructor(
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    this.succesEmitSubscribe()
  }

  succesEmitSubscribe(){
    this.popupService.popupSuccesEmit.subscribe(res => {
      console.log(this.doneMassage)
      this.doneMassage = res
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
