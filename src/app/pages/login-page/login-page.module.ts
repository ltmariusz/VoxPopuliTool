import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { LoginModule } from "../../components/login/login.module";
import { FooterModule } from 'src/app/components/footer/footer.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ReminderPasswordModule } from 'src/app/components/reminder-password/reminder-password.module';


const routes: Routes = [
  {
    path:'',component:LoginPageComponent,
  }
]


@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    exports: [
        LoginPageComponent,

    ],
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule.forChild(routes),
        LoginModule,
        ReminderPasswordModule,
        FooterModule
    ]
})
export class LoginPageModule { }
