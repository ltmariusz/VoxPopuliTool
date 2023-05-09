import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewPasswordDialogComponent } from './components/dialogs/new-password-dialog/new-password-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPasswordDialogComponent,
    
    // LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
