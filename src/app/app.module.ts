import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserDataService } from './services/global-services/user-data.service';
import { ExampleRateVisitComponent } from './pages/test-pages/example-rate-visit/example-rate-visit.component';
import { ExampleRateDeliveryComponent } from './pages/test-pages/example-rate-delivery/example-rate-delivery.component';


@NgModule({
  declarations: [
    AppComponent
    
        
    // LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // LoginPageModule
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
