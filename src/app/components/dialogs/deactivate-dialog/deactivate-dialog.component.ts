import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deactivate-dialog',
  templateUrl: './deactivate-dialog.component.html',
  styleUrls: ['./deactivate-dialog.component.scss']
})
export class DeactivateDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<DeactivateDialogComponent>) { }


  Add(){
    this.dialogRef.close({
      result: true
    });
  }

  Close(){
    this.dialogRef.close();
  }
}
