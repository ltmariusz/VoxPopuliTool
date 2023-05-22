import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-selected-questionnaire',
  templateUrl: './selected-questionnaire.component.html',
  styleUrls: ['./selected-questionnaire.component.scss']
})
export class SelectedQuestionnaireComponent implements OnInit{

  alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','X','Y','Z'
  ]

  poll = [
    {
      id: 0,
      title: 'Testowe pytanie, co na śniadanie?',
      answer: [
        {
          id: 0,
          title: 'płatki z mlekiem',
          count: 10
        },
        {
          id: 1,
          title: 'piwo z sokiem',
          count: 14
        },
        {
          id: 2,
          title: 'sok z piwem',
          count: 30
        },
        {
          id: 3,
          title: 'piwo z piwem',
          count: 17
        },
      ]
    },
    {
      id: 0,
      title: 'Mocium panie co na kolacje?',
      answer: [
        {
          id: 0,
          title: 'cola',
          count: 43
        },
        {
          id: 1,
          title: 'sok'
          ,
          count: 20
        },
        {
          id: 2,
          title: 'tyskie'
          ,
          count: 49
        },
      ]
    }
  ]

  arrayWithSeriesCount?: any [] = []
  arrayWithLabelNames?: any [] = []

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43],
      chart: {
        width: 380,
        type: "pie"
      },
      // labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 30000,
          options: {
            chart: {
              width: 360,
              // height: 200
            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
    this.loadLabelsTochart()
    this.loadSeriesToChart()
  }

  loadLabelsTochart(){
    for (let index = 0; index < this.poll.length; index++) {
      let arrayLabelNameToPush = []
      for (let indexAnswer = 0; indexAnswer < this.poll[index].answer.length; indexAnswer++) {
        arrayLabelNameToPush!.push(this.poll[index].answer[indexAnswer].title)
      }
      this.arrayWithLabelNames?.push(arrayLabelNameToPush)
    }
    console.log(this.arrayWithLabelNames)
  }

  loadSeriesToChart(){
    // arrayWithSeriesCount
    for (let index = 0; index < this.poll.length; index++) {
      let arrayWithSeriesCountToPush = []
      for (let indexAnswer = 0; indexAnswer < this.poll[index].answer.length; indexAnswer++) {
        arrayWithSeriesCountToPush!.push(this.poll[index].answer[indexAnswer].count)
      }
      this.arrayWithSeriesCount?.push(arrayWithSeriesCountToPush)
    }
    console.log(this.arrayWithSeriesCount)
  }

}
