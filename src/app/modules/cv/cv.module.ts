import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CvRoutingModule,
    SharedModule
  ]
})
export class CvModule { }
