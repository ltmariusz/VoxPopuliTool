import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnairesListComponent } from './questionnaires-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomDialogModule } from '../dialogs/custom-dialog.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    QuestionnairesListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    CustomDialogModule,
    MatExpansionModule
  ],
  exports: [
    QuestionnairesListComponent
  ]
})
export class QuestionnairesListModule { }
