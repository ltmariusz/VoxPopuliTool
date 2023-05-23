import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-close-questionnaire-personal-dialog',
  templateUrl: './close-questionnaire-personal-dialog.component.html',
  styleUrls: ['./close-questionnaire-personal-dialog.component.scss']
})
export class CloseQuestionnairePersonalDialogComponent {

  constructor(public dialogRef: MatDialogRef<CloseQuestionnairePersonalDialogComponent>) { }


  End(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }
  
}
