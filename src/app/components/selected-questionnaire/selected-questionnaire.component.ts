import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AnkietaService, QuestionListAll, Questionnaire } from 'src/app/services/ankieta.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

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

  idParam?: string

  subQuestionaire?: Subscription
  questionaire?: Questionnaire
  loadingQuestionaire = false
  customErrorQuestionaire?: string

  subQuestionsList?: Subscription
  questionsList?: Array<QuestionListAll>
  loadingQuestionsList = false
  customErrorQuestionsList?: string

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

  constructor(
    private ankietaRest: AnkietaService,
    private route: ActivatedRoute,
    private popupService: PopupManagementService,
  ) {
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
          breakpoint: 900,
          options: {
            chart: {
              width: 300
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
    this.checkUrl()
    this.getQuestionaire()
    this.getQuestionsList()

    this.loadLabelsTochart()
    this.loadSeriesToChart()
  }

  checkUrl() {
    this.route.paramMap.subscribe(params => {
      this.idParam = params.get('code')!
    });
  }

  getQuestionaire(){
    this.loadingQuestionaire = true
    this.subQuestionaire = this.ankietaRest.getAnkietaId(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionaire = response.body
          console.log(response.body)
        }
        else{
          this.customErrorQuestionaire = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionaire)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionaire = false
        this.customErrorQuestionaire = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionaire!)
      },
      complete: () => {
        this.loadingQuestionaire = false;
      }
    })
  }

  getQuestionsList(){
    this.loadingQuestionsList = true
    this.subQuestionsList = this.ankietaRest.getAnkietaIdQuestions(Number(this.idParam)).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsList = response.body
          console.log(response.body)
        }
        else{
          this.customErrorQuestionsList = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsList)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsList = false
        this.customErrorQuestionsList = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsList!)
      },
      complete: () => {
        this.loadingQuestionsList = false;
      }
    })
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
