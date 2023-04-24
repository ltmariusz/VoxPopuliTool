import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordPageComponent } from './new-password-page.component';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
  declarations: [
    NewPasswordPageComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports:[
    NewPasswordPageComponent
  ]
})
export class NewPasswordPageModule { }
