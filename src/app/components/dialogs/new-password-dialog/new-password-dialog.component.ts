import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupManagementService } from 'src/app/services/management/popup-management.service';

@Component({
  selector: 'app-new-password-dialog',
  templateUrl: './new-password-dialog.component.html',
  styleUrls: ['./new-password-dialog.component.scss']
})
export class NewPasswordDialogComponent {

  formNewPassword = new FormGroup({
    password: new FormControl<string>('', Validators.required),
    password2: new FormControl<string>('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<NewPasswordDialogComponent>,
    private popupService: PopupManagementService,
    ) { }


  Add(){
    let password = this.formNewPassword.get('password')!.value
    let password2 = this.formNewPassword.get('password2')!.value

    if (this.formNewPassword.valid && password == password2) {
      this.dialogRef.close({
        result: true,
        password: this.formNewPassword.get('password')!.value
      }); 
    }
    else{
      this.popupService.errorEmit("Hasła muszą być identyczne")
    }
  }

  Close(){
    this.dialogRef.close();
  }

}
