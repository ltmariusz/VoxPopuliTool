import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AnkietaService, QuestionListAll, Questionnaire, StatsList } from 'src/app/services/ankieta.service';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export interface Pool{
  answer: any,
  correct: Array<any>,
  count: any
}


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

  subQuestionsStats?: Subscription
  questionsStats!: Array<StatsList>
  loadingQuestionsStats = false
  customErrorQuestionsStats?: string

  poll: Array<any> = []

  arrayWithSeriesCount?: any [] = []
  arrayWithLabelNames?: any [] = []

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  math = Math;

  metadateForm = new FormGroup({
    key: new FormControl ('', [Validators.required]),
    value: new FormControl ('', [Validators.required])
  })



  constructor(
    private ankietaRest: AnkietaService,
    private route: ActivatedRoute,
    private popupService: PopupManagementService,
    private router: Router
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
          // console.log(response.body)
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
          // console.log(response.body)
          this.getQuestionsStats()
          // this.loadLabelsTochart()
          // this.loadSeriesToChart()
          // this.loadChart()
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

  // loadChart(){
  //   if (this.questionsList && this.questionsStats) {
  //     this.takeStatsAndMoveToChart()
  //         this.loadLabelsTochart()
  //         this.loadSeriesToChart()
  //   }
  // }

  getQuestionsStats(key?: string, value?: string){
    this.loadingQuestionsStats = true
    this.subQuestionsStats = this.ankietaRest.getAnkietaIdStats(Number(this.idParam), key!, value!).subscribe({
      next: (response) => {
        if(response.body){
          this.questionsStats = response.body
          // console.log(response.body)

          this.poll = []
          this.arrayWithSeriesCount = []

          this.takeStatsAndMoveToChart()
          // this.loadLabelsTochart()
          // this.loadSeriesToChart()
          this.loadAnswersTextAndRate()

          // ApexCharts.exec('chart', 'updateOptions', this.chartOptions, true);
          

          // this.loadChart()
        }
        else{
          this.customErrorQuestionsStats = 'Brak obiektu odpowiedzi';
          this.popupService.errorEmit(this.customErrorQuestionsStats)
        }
      },
      error: (errorResponse) => {
        this.loadingQuestionsStats = false
        this.customErrorQuestionsStats = errorResponse.error.message
        this.popupService.errorEmit(this.customErrorQuestionsStats!)
      },
      complete: () => {
        this.loadingQuestionsStats = false;
      }
    })
  }

  loadLabelsTochart(){
    if (this.questionsList!.length! != 0) {
      for (let index = 0; index < this.questionsList!.length; index++) {
        let arrayLabelNameToPush = []
        for (let indexAnswer = 0; indexAnswer < this.questionsList![index].answerVariants.length; indexAnswer++) {
          arrayLabelNameToPush!.push(this.questionsList![index].answerVariants[indexAnswer].answer)
        }
        this.arrayWithLabelNames?.push(arrayLabelNameToPush)
      }  
    }
    
    // console.log(this.arrayWithLabelNames)
  }

  loadSeriesToChart(){
    if (this.questionsList!.length != 0) {
        // arrayWithSeriesCount
      for (let index = 0; index < this.questionsList!.length!; index++) {
        let arrayWithSeriesCountToPush = new Array()
        for (let indexAnswer = 0; indexAnswer < this.questionsList![index].answerVariants.length; indexAnswer++) {
          console.log(this.poll[index])
          arrayWithSeriesCountToPush!.push(this.poll[index]?.answer[indexAnswer]?.count)
          // EDIT WITH STATS FORM REST
          // console.log("test 123")
        }
        this.arrayWithSeriesCount?.push(arrayWithSeriesCountToPush)
      } 
    }
    console.log(this.arrayWithSeriesCount)
  }

  back(){
    this.router.navigateByUrl('/home/form-list');
  }

  takeStatsAndMoveToChart(){
    for (let index = 0; index < this.questionsStats!.length; index++) {
      // console.log('test' + index)
      if (this.questionsStats![index].answerList?.length == 0 || this.questionsStats![index].answerList == null) {
        this.poll!.push(
          {
            answer: []
          }
        )
      }
      // if (condition) {
        else
      {
        // console.log(this.questionsStats![index]!.answerList!.length)
        for (let indexAnswer = 0; indexAnswer < this.questionsStats![index]!.answerList!.length; indexAnswer++) {
          console.log(this.questionsStats![index].answerList![indexAnswer].answerSum)
          this.poll!.push(
            {
              answer: []
            }
          )
          this.poll![index]?.answer.push(
            {
              count: this.questionsStats![index].answerList![indexAnswer].answerSum
            }
          )   
        }
      }

    }
    console.log(this.poll)

    this.loadLabelsTochart()
    this.loadSeriesToChart()
  }

  loadAnswersTextAndRate(){
    for (let index = 0; index < this.questionsStats!.length; index++) {
      if (this.questionsStats![index].answerList) {
        this.questionsList![index].correct = null
      }
      if (this.questionsStats![index].textList) {
        this.questionsList![index].correct = [this.questionsStats![index].textList]  
        // console.log(this.questionsList![index].correct)
      }
      if (this.questionsStats![index].rating) {
        this.questionsList![index].correct = this.questionsStats![index].rating?.averageRating
      }
    }
    // console.log(this.questionsList)
  }

  showChart(id: number){
    // for (let index = 0; index < this.poll.length; index++) {
    let sumCount = 0
      for (let indexAnswer = 0; indexAnswer < this.poll![id]?.answer.length; indexAnswer++) {
        // console.log(this.poll[id].answer[indexAnswer].count)
        sumCount = sumCount + this.poll![id]!.answer[indexAnswer].count
      }
      // if (sumCount != 0) {
      //   sumCount = true
      // }
      // if (sumCount = 0) {
      //   sumCount = false
      // }
      // console.log(sumCount)
    // }
    return sumCount
  }

  submitMetadateForm(){
    
    let key = this.metadateForm.get('key')!.value;
    let value = this.metadateForm.get('value')!.value;

    this.getQuestionsStats(key!, value!)
  }
}
