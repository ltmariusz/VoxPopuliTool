import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupErrorComponent } from './popup-error.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PopupErrorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PopupErrorComponent
  ]
})
export class PopupErrorModule { }
