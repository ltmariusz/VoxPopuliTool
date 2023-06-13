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
  { path: 'new-password/:code', loadChildren: ()=>import('./pages/new-password-page/new-password-page.module').then(m=>m.NewPasswordPageModule)},
  { path: 'answer-form/:id', loadChildren: ()=>import('./pages/answer-form/answer-form.module').then(m=>m.AnswerFormModule)},
  //USUNAC TE PATHY DOCELOWO
  { path: 'answer-form/test/exampleRateDelivery', loadChildren: ()=>import('./pages/test-pages/example-rate-delivery/example-rate-delivery.module').then(m=>m.ExampleRateDeliveryModule)},
  { path: 'answer-form/test/exampleRateVisit', loadChildren: ()=>import('./pages/test-pages/example-rate-visit/example-rate-visit.module').then(m=>m.ExampleRateVisitModule)},
  //------------------------
  { path: '**', redirectTo: 'login-page', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
