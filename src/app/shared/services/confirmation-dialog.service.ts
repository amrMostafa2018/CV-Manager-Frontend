import { Injectable, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService implements OnInit {
  private resultSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  result = this.resultSubject.asObservable();

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  Confirm(
    dialogMessage: string,
    cancelButtonText?: string ,
    confirmButtonText?: string,
  ) {
     const dialogRef = this.dialogService.open(ConfirmationDialogComponent, {
       showHeader: false,
       contentStyle: { overflow: 'unset', padding: 0, 'border-radius': '100%' },
       closable: true,
      // closeAriaLabel: 'cancel',
       modal: true,
       position: 'center',
       maskStyleClass: 'p-dialog-mask',
       closeOnEscape: false,
       dismissableMask: false,
       data: {
         severity: 'warning',
         dialogTitle: 'Warning',
         dialogMessage: dialogMessage,
         CancellButtonName: cancelButtonText ?? 'Cancel',
         confirmButtonName: confirmButtonText ?? 'Confirm',
         closeOnEscape: true,
         dismissableMask:true,
       },
     });
    return dialogRef.onClose
  }

  delete(
    dialogMessage: string,
    cancelButtonText?: string | undefined,
    confirmButtonText?: string | undefined,
  ) {
    const dialogRef = this.dialogService.open(ConfirmationDialogComponent, {
      showHeader: false,
      contentStyle: { overflow: 'unset', padding: 0, 'border-radius': '100%' },
      closable: true,
     // closeAriaLabel: 'cancel',
      modal: true,
      position: 'center',
      maskStyleClass: 'p-dialog-mask',
      closeOnEscape: false,
      dismissableMask: false,
      data: {
        severity: 'danger',
        dialogTitle: 'Error',
        dialogMessage: dialogMessage,
        CancellButtonName: cancelButtonText ?? 'Cancel',
        confirmButtonName: confirmButtonText ?? 'Confirm',
        closeOnEscape: true,
        dismissableMask: true,
      },
    });
    return dialogRef.onClose;
  }
}
