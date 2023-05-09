import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-password-dialog',
  templateUrl: './new-password-dialog.component.html',
  styleUrls: ['./new-password-dialog.component.scss']
})
export class NewPasswordDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewPasswordDialogComponent>) { }


  Add(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }

}
