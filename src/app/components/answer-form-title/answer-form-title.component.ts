import { Component, Input, OnInit } from '@angular/core';
import { AllFormsManagementService } from 'src/app/services/management/all-forms-management.service';

@Component({
  selector: 'app-answer-form-title',
  templateUrl: './answer-form-title.component.html',
  styleUrls: ['./answer-form-title.component.scss']
})
export class AnswerFormTitleComponent implements OnInit{

  constructor(private allFormsManagementService: AllFormsManagementService){}
  
  /**
   * tytuł ankiety
   */
  @Input() titleForm!: string
  
  // titleOfForm = "Tytuł Ankiety"
  
  /**
   * Opis ankiety
   */
  @Input() descriptionForm!: string
  // descriptionOfForm = "W tym miejscu pojawiać się będzie opis utworzonej ankiety"
  
  
  ngOnInit() {
    this.allFormsManagementService.getAllAnswerEmitter.subscribe(res=>{
      this.allFormsManagementService.allAnswersFromOneForm.title=this.titleForm
    })
  }

}
