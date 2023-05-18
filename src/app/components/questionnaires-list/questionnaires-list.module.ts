import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnairesListComponent } from './questionnaires-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    QuestionnairesListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    QuestionnairesListComponent
  ]
})
export class QuestionnairesListModule { }
