import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-title',
  templateUrl: './form-create-title.component.html',
  styleUrls: ['./form-create-title.component.scss']
})
export class FormCreateTitleComponent implements OnInit, OnDestroy {

  constructor(private createFormsManagementService: CreateFormsManagementService) { }

  isPublic?: boolean

  ngOnInit(): void {
    this.getTitleForm();
  }
  // @HostListener('document:focusin', ['$event.target'])
  // onFocusIn(target: HTMLElement) {
  //   if (target.tagName === 'MAT-CARD') {
  //     // Obsługa zdarzenia focus dla <mat-card>
  //     console.log('Focused on <mat-card>');
  //   }
  // }
  // myFocusFunction() {
  //   // Obsługa zdarzenia focus dla <mat-card>
  //   console.log('Focused on <mat-card>');
  // }

  createFormsTitle = new FormGroup({
    titleForm: new FormControl('', [Validators.required]),
    descriptionForm: new FormControl('', [Validators.required]),
    messageToAnswerers: new FormControl('',[Validators.required])
  })
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  getTitleForm() {
    this.createFormsManagementService.getAllFormsEmitter.subscribe(
      res => {
        this.createFormsManagementService.titleForm = this.createFormsTitle.get('titleForm')?.value!
        this.createFormsManagementService.descriptionForm = this.createFormsTitle.get('descriptionForm')?.value!
        this.createFormsManagementService.isPublic = this.isPublic

        this.createFormsManagementService.messageToAnswerers = this.createFormsTitle.get('messageToAnswerers')?.value!
        this.createFormsManagementService.rangeStart = this.range.get('start')?.value!
        this.createFormsManagementService.rangeEnd = this.range.get('end')?.value!

        
      })
  }

  onSelectionChange(event: any) {
    let selectedValue = event.value;
    this.isPublic = selectedValue
  }
  // blurr() {
  //   console.log("testt")
  // }

  ngOnDestroy() {
    delete this.createFormsManagementService.isPublic  
    delete this.createFormsManagementService.descriptionForm
    delete this.createFormsManagementService.titleForm 
  }
}
