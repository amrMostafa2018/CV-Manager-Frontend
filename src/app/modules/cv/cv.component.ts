import { Component, OnInit } from '@angular/core';
import { CvService } from './services/cv.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { CVMOdel, CVRequestModel } from './models/cv-request-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from 'src/app/shared/services/custom-validation.service';
import { ConfirmationDialogService } from 'src/app/shared/services/confirmation-dialog.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 10;
  totalRecords!: number;
  first = 0;
  rows = 10;
  CVList!: CVMOdel[];
  CVForm!: FormGroup;
  CVRequest!: CVRequestModel;
  CVUpdateRequest!: CVMOdel;
  isEdit: boolean = false;

  constructor(private cvService: CvService,
    private toasterService: ToasterService,
    private fb: FormBuilder,
    private validation: CustomValidationService,
    private confirmationDialog: ConfirmationDialogService) {
    this.createCVForm();
  }

  ngOnInit(): void {
    this.GetCVsData();
  }

  createCVForm() {
    this.CVForm = this.fb.group({
      id: [0],
      name: [null, [Validators.required, Validators.maxLength(255), this.validation.noWhitespaceValidator]],
      fullName: [null, [Validators.required, Validators.maxLength(255), this.validation.noWhitespaceValidator]],
      cityName: [null, [Validators.maxLength(255), this.validation.noWhitespaceValidator]],
      email: [null, [Validators.maxLength(255), this.validation.email]],
      mobileNumber: [null, [Validators.required, Validators.maxLength(255), this.validation.noWhitespaceValidator, this.validation.DigitOnly]],
      companyName: [null, [Validators.required, Validators.maxLength(20), this.validation.noWhitespaceValidator]],
      city: [null, [Validators.maxLength(255), this.validation.noWhitespaceValidator]],
      companyField: [null, [Validators.maxLength(255), this.validation.noWhitespaceValidator]]
    })
  }

  GetCVsData() {
    this.cvService.GetCV().subscribe(res => {
      this.CVList = res.data;
      this.totalRecords = this.CVList.length;
    }, err => {
      this.toasterService.error(err?.error?.error?.detail);
    });
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  edit(cv: CVMOdel) {
    this.patchDataToForm(cv);
  }

  Delete(id: number) {
    console.log(id);
    this.confirmationDialog
      .Confirm('Are you sure Delete CV ?')
      .subscribe((res) => {
        if (res) {
          this.cvService.DeleteCV(id).subscribe(
            (res) => {
              this.toasterService.success('Cv Deleted successfully');
              this.GetCVsData();
            },
            (err) => {
              this.toasterService.error(err?.error?.error?.detail);
            });
          }
      });
  }

  submitForm() {
    if (this.CVForm.valid) {
      if (!this.isEdit) {
        this.AddCV();
      }
      else {
        this.UpdateCV();
      }
    }
    else {
      this.CVForm.markAllAsTouched();
    }
  }

  AddCV() {
    this.CVRequest = this.CVForm.value as CVRequestModel;
    this.cvService.AddCV(this.CVRequest).subscribe(
      (res) => {
        this.createCVForm();
        this.toasterService.success('Cv added successfully');
        this.GetCVsData();
      },
      (err) => {
        this.toasterService.error(err?.error?.error?.detail);
      }
    )
  }

  UpdateCV() {
    this.CVUpdateRequest = this.CVForm.value as CVMOdel;
    this.cvService.UpdateCV(this.CVUpdateRequest).subscribe(
      (res) => {
        this.createCVForm();
        this.toasterService.success('CV added successfully');
        this.GetCVsData();
      },
      (err) => {
        this.toasterService.error(err?.error?.error?.detail);
      }, () => {
        this.isEdit = false;
      }
    )
  }

  patchDataToForm(cv: CVMOdel) {
    this.CVForm.patchValue({
      'id': cv.id,
      'name': cv.name,
      'fullName': cv.fullName,
      'cityName': cv.cityName,
      'email': cv.email,
      'mobileNumber': cv.mobileNumber,
      'companyName': cv.companyName,
      'city': cv.city,
      'companyField': cv.companyField
    });
    this.isEdit = true;
  }

  Clear() {
    this.CVForm.reset();
    this.isEdit = false;
  }

}
