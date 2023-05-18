import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-active-user-dialog',
  templateUrl: './active-user-dialog.component.html',
  styleUrls: ['./active-user-dialog.component.scss']
})
export class ActiveUserDialogComponent {

  constructor(public dialogRef: MatDialogRef<ActiveUserDialogComponent>) { }


  Add(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }

}
