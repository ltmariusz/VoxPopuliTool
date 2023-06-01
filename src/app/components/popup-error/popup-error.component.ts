import { Component, OnInit } from '@angular/core';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-popup-error',
  templateUrl: './popup-error.component.html',
  styleUrls: ['./popup-error.component.scss']
})
export class PopupErrorComponent implements OnInit{

  popupList: any = []

  constructor(
    private popupService: PopupManagementService
  ){ }

  ngOnInit(): void {
    this.errorEmitSubscribe()
  }

  errorEmitSubscribe(){
    this.popupService.popupErrorEmit.subscribe(res => {
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
