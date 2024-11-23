import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    LoaderComponent,
    NotFoundComponent,
    ErrorMessagesComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    TableModule,
    ToastModule,
    DynamicDialogModule,
    ConfirmDialogModule,
  ],
  exports: [
    ConfirmationDialogComponent,
    LoaderComponent,
    ErrorMessagesComponent,
    TableModule
  ],
  providers : [DialogService]
})
export class SharedModule { }
