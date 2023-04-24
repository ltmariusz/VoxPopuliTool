import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReminderPasswordComponent } from './components/reminder-password/reminder-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';


const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent,
  children:[
    {path: '',component: LoginComponent},
    {path: 'password', component: ReminderPasswordComponent}
  ]},
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m=>m.HomePageModule)},
  { path: 'new-password', component: NewPasswordPageComponent},
  { path: '**', redirectTo: 'login-page', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
