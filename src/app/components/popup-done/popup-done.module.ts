import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDoneComponent } from './popup-done.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PopupDoneComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PopupDoneComponent
  ]
})
export class PopupDoneModule { }
