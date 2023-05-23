import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-close-questionnaire-dialog',
  templateUrl: './close-questionnaire-dialog.component.html',
  styleUrls: ['./close-questionnaire-dialog.component.scss']
})
export class CloseQuestionnaireDialogComponent {

  constructor(public dialogRef: MatDialogRef<CloseQuestionnaireDialogComponent>) { }


  End(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }

}
