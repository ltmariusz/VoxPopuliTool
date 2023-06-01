import { Component, OnInit } from '@angular/core';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';


@Component({
  selector: 'app-popup-done',
  templateUrl: './popup-done.component.html',
  styleUrls: ['./popup-done.component.scss']
})

export class PopupDoneComponent implements OnInit{

  popupList: any = []

  constructor(
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    this.succesEmitSubscribe()
  }

  succesEmitSubscribe(){
    this.popupService.popupSuccesEmit.subscribe(res => {
      this.popupList!.push(
        {
          message: res
        }
      )
      setTimeout(() => {
        this.popupList!.splice(0, 1)
      }, 6000);
    })
  }

  close(id: number){
    this.popupList.splice(id, 1)
  }

}