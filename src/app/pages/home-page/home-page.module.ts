import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavLinkModule } from 'src/app/components/nav-link/nav-link.module';

const routes: Routes =[
  {
    path:'',
    component: HomePageComponent,
    children:[
      {
        path: 'form-creator',
        loadChildren: () => import('../form-creator-page/form-creator-page.module').then(m => m.FormCreatorPageModule)
      }
    ]
  }
]


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    NavLinkModule
  ],
  exports:[
    RouterModule,
    HomePageComponent
  ]
})
export class HomePageModule { }
