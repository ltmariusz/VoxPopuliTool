import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-create-add-long-answer',
  templateUrl: './form-create-add-long-answer.component.html',
  styleUrls: ['./form-create-add-long-answer.component.scss']
})
export class FormCreateAddLongAnswerComponent {

  @Input() index!: number;
}
