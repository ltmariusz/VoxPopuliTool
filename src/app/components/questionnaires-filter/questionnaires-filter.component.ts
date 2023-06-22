import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { QuestionnaireListManagementService } from 'src/app/services/management/questionnaire-list-management.service';

@Component({
  selector: 'app-questionnaires-filter',
  templateUrl: './questionnaires-filter.component.html',
  styleUrls: ['./questionnaires-filter.component.scss']
})
export class QuestionnairesFilterComponent implements OnInit{

  constructor(
    private questionnaireListManager: QuestionnaireListManagementService
  ) { }

  ngOnInit(): void {
    this.questionnaireListManager.isCompleteValue = this.searchForm.get('isComplete')!.value!
  }

  searchForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    isActive: new FormControl<boolean|string>('all'),
    isComplete: new FormControl<boolean|string>(true),
  });

  search(){
    let title = this.searchForm.get('title')!.value
    let name = this.searchForm.get('name')!.value
    let description = this.searchForm.get('description')!.value
    let isActive = this.searchForm.get('isActive')!.value

    if (isActive == 'all') {
      isActive = null
    }

    this.questionnaireListManager.isCompleteValue = this.searchForm.get('isComplete')!.value!

    // console.log(title, name, description, isActive)

    this.questionnaireListManager.getQuestionnaireList(title!, name!, description!, isActive!)
  }

}
