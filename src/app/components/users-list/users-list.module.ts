import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
