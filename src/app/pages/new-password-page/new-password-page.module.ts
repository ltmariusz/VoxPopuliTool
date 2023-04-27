import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordPageComponent } from './new-password-page.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { NewPasswordModule } from 'src/app/components/new-password/new-password.module';

const routes: Routes = [
  { path: '', component: NewPasswordPageComponent }
]

@NgModule({
  declarations: [
    NewPasswordPageComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NewPasswordModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    NewPasswordPageComponent
  ], 
})
export class NewPasswordPageModule { }
