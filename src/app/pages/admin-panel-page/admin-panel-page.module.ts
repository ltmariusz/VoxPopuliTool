import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPageComponent } from './admin-panel-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListModule } from 'src/app/components/users-list/users-list.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  { path: '', component: AdminPanelPageComponent }
]

@NgModule({
  declarations: [
    AdminPanelPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AdminPanelPageComponent
  ]
})
export class AdminPanelPageModule { }
