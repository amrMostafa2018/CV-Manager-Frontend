import { Component, ElementRef, HostListener } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  dialogConfig = {
    severity: 'warning',
    dialogTitle: 'title',
    dialogMessage: 'warning message',
    CancellButtonName: 'cancel',
    confirmButtonName: 'confirm',
    closeOnEscape: true,
    dismissableOverlay: true,
  };
  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private elementRef: ElementRef
  ) {
    this.dialogConfig = this.config.data;
  }

  close(action: boolean) {
    this.ref.close(action);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    // Emit false when escape key is pressed
    this.ref.close(false);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent) {
    // Check if the click is outside the dialog and if it's a left click
    const targetElement = event.target as HTMLElement;
    if (
      this.ref &&
      this.elementRef.nativeElement &&
      event.button === 0 && // Left mouse button
      !this.elementRef.nativeElement.contains(targetElement)
    ) {
      // Click is outside the dialog, emit false
      this.ref.close(false);
    }
  }
}

