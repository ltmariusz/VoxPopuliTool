import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-title',
  templateUrl: './form-create-title.component.html',
  styleUrls: ['./form-create-title.component.scss']
})
export class FormCreateTitleComponent {

  createFormsTitle = new FormGroup({
    titleForm: new FormControl('', [Validators.required]),
    descriptionForm: new FormControl('', [Validators.required])
  })


  
}
