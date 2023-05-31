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
import { SelectedQuestionnaireModule } from 'src/app/components/selected-questionnaire/selected-questionnaire.module';
import { SelectedQuestionnaireComponent } from 'src/app/components/selected-questionnaire/selected-questionnaire.component';
import { PopupErrorModule } from 'src/app/components/popup-error/popup-error.module';

const routes: Routes =[
  {
    path:'',
    component: HomePageComponent,
    children:[
      {
        path: 'form-creator',
        loadChildren: () => import('../form-creator-page/form-creator-page.module').then(m => m.FormCreatorPageModule)
      },
      {
        path: 'form-list',
        loadChildren: () => import('../form-list-page/form-list-page.module').then(m=>m.FormListPageModule),
      },
      {
        path: 'questionnaire',
        loadChildren: () => import('../../components/selected-questionnaire/selected-questionnaire.module').then(m=>m.SelectedQuestionnaireModule)
      },
      {
        path: 'generate-personal-questionnaire',
        loadChildren: () => import('../generate-personal-questionnaire-page/generate-personal-questionnaire-page.module').then(m=>m.GeneratePersonalQuestionnairePageModule)
      },
      {
        path: 'personal-questionnaire',
        loadChildren: () => import('../personal-preview-questionnaire-page/personal-preview-questionnaire-page.module').then(m=>m.PersonalPreviewQuestionnairePageModule)
      },
      {
        path: 'admin-panel',
        loadChildren: () => import('../admin-panel-page/admin-panel-page.module').then(m=>m.AdminPanelPageModule)
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
    NavLinkModule,
    PopupErrorModule
  ],
  exports:[
    RouterModule,
    HomePageComponent
  ]
})
export class HomePageModule { }
