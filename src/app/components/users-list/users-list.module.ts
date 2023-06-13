import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CustomDialogModule } from '../dialogs/custom-dialog.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    UsersListComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    CustomDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersListModule { }
