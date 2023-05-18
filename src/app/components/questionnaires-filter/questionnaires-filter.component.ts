import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-questionnaires-filter',
  templateUrl: './questionnaires-filter.component.html',
  styleUrls: ['./questionnaires-filter.component.scss']
})
export class QuestionnairesFilterComponent {

  searchForm = new FormGroup({
    name: new FormControl(''),
    acronim: new FormControl(''),
    email: new FormControl(''),
    dateStartInput: new FormControl(''),
    dateEndInput: new FormControl('')
  });

  search(){

  }

}
