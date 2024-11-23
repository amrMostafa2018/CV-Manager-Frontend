import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  constructor() {}

  get email(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (
        control.value === '' ||
        control.value === null ||
        control.value === undefined
      ) {
        return null;
      }
      // If valid; do nothing
      if (!format.test(control?.value)) {
        return { email: { value: control.value } };
      }
      return null;
    };
  }

  get DigitOnly(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == '' || control.value == null) {
        return null;
      }
      if (
        isNaN(Number(control.value)) ||
        (!isNaN(Number(control.value)) && Number(control.value) % 1 !== 0)
      ) {
        return { digitOnly: { value: control.value } };
      }
      return null;
    };
  }
  get Numberfrom20digitmax(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let format = /^[0-9][0-9]{0,19}$/;
      if (
        control.value === '' ||
        control.value === null ||
        control.value === undefined
      ) {
        return null;
      }
      // If valid; do nothing
      if (!format.test(control?.value)) {
        return { Numberfrom1_20digitmax: { value: control.value } };
      }
      return null;
    };
  }

  get noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (
        control.value === '' ||
        control.value === null ||
        control.value === undefined
      ) {
        return null;
      }
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }
 
  RequiredIfValue(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if ((control.value == '' || control.value == null) && value == 2)
        return { required: true };
      return null;
    };
  }

}
