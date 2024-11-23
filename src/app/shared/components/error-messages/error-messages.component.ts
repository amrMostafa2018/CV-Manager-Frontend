import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {
  @Input() ctrl!: FormControl;
  @Input() customeMessage!: string;
  errorMessages : any = {
    email: 'invalid email',
    validatePhoneNumber: 'invalid phone number',
    invalidZipCode: 'general.error_messages.invalid_zip_code',
    dateLessThanOrEqualToday:
      'general.error_messages.date_less_than_or_equal_today',
    digitOnly: 'digits only',

    IsValidimage: 'GENERAL.ERROR_MESSAGES.INVALID_IMAGE',
    IsValidPdf: 'GENERAL.ERROR_MESSAGES.INVALID_PDF',
    IsValidimageSIZE: 'GENERAL.ERROR_MESSAGES.INVALID_IMAGE_SIZE',
    expiredCardDate: 'GENERAL.ERROR_MESSAGES.EXPIRED_CARD',
    invalidPhoneNumber: 'invalid phone number',
    AlphaNumericEnSpecial:'general.error_messages.alpha_numeric_en_special',
    required:  "this field is required",
    maxlength:  "max_length",
    minlength:  "general.error_messages.min_length",
    whitespace:"white space not valid",
    Numberfrom1_20digitmax:"general.error_messages.numbers_20_digit_max",
    min: "general.error_messages.min"
  };

  ExpectedValueKeys : any= {
    min: 'min',
    max: 'max',
    minlength: 'requiredLength',
    maxlength: 'requiredLength',
  };

  shouldShowErrors(): boolean | null {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOfErrors(): { message: string; expected?: any }[] {
    return Object.keys(this.ctrl.errors!).map((error) => {
      if (error == 'pattern') {
        return {
          message: this.customeMessage,
          expected: this.ctrl.errors![error]
            ? this.ctrl.errors![error][this.ExpectedValueKeys[error]]
            : null,
        };
      }
      return {
        message: this.errorMessages[error] ?? this.ctrl.errors![error],
        expected: this.ctrl.errors![error]
          ? this.ctrl.errors![error][this.ExpectedValueKeys[error]]
          : null,
      };
    });
  }
}
