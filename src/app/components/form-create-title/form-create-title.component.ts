import { Component, HostListener, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateFormsManagementService } from 'src/app/services/management/create-forms-management.service';

@Component({
  selector: 'app-form-create-title',
  templateUrl: './form-create-title.component.html',
  styleUrls: ['./form-create-title.component.scss']
})
export class FormCreateTitleComponent implements OnInit{

  constructor(private createFormsManagementService:CreateFormsManagementService){}
  
  
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
    descriptionForm: new FormControl('', [Validators.required])
  })

  getTitleForm(){
    this.createFormsManagementService.getAllFormsEmitter.subscribe(
      res=>{
        this.createFormsManagementService.titleForm = this.createFormsTitle.get('titleForm')?.value!
        this.createFormsManagementService.descriptionForm = this.createFormsTitle.get('descriptionForm')?.value!
      })
  }
  // blurr() {
  //   console.log("testt")
  // }
}
