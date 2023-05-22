import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedQuestionnaireComponent } from './selected-questionnaire.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SelectedQuestionnaireComponent }
]

@NgModule({
  declarations: [
    SelectedQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  exports: [
    SelectedQuestionnaireComponent
  ]
})
export class SelectedQuestionnaireModule { }

