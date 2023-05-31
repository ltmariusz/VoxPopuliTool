import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-role-dialog',
  templateUrl: './change-role-dialog.component.html',
  styleUrls: ['./change-role-dialog.component.scss']
})
export class ChangeRoleDialogComponent {

  constructor(public dialogRef: MatDialogRef<ChangeRoleDialogComponent>) { }


  Add(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }

}
