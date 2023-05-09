import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPageComponent } from './admin-panel-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListModule } from 'src/app/components/users-list/users-list.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


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
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    AdminPanelPageComponent
  ]
})
export class AdminPanelPageModule { }
