import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePasswordComponent } from './active-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NewPasswordModule } from 'src/app/components/new-password/new-password.module';
import { ActivePasswordComponentModule } from 'src/app/components/active-password-component/active-password-component.module';

const routes: Routes = [
  { path: '', component: ActivePasswordComponent }
]

@NgModule({
  declarations: [
    ActivePasswordComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NewPasswordModule,
    RouterModule.forChild(routes),
    ActivePasswordComponentModule
  ],exports:[
    ActivePasswordComponent
  ]

})
export class ActivePasswordModule { }
