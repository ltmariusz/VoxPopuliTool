import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-password-dialog',
  templateUrl: './new-password-dialog.component.html',
  styleUrls: ['./new-password-dialog.component.scss']
})
export class NewPasswordDialogComponent {

  formNewPassword = new FormGroup({
    password: new FormControl<string>('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<NewPasswordDialogComponent>) { }


  Add(){
    if (this.formNewPassword.valid) {
      this.dialogRef.close({
        result: true,
        password: this.formNewPassword.get('password')!.value
      }); 
    }
  }

  Close(){
    this.dialogRef.close();
  }

}
