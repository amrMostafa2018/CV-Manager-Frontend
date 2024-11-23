import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private messageService: MessageService) {}
  info(detail: string = '') {
    this.messageService.add({
      severity: 'info',
      summary: "information",
      detail: detail,
    });
  }
  warning(detail: string = '') {
    this.messageService.add({
      severity: 'warn',
      summary:'warning',
      detail: detail,
    });
  }
  error(detail: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: detail,
    });
  }
  success(detail: string = '') {
    this.messageService.add({
      severity: 'success',
      summary: 'success',
      detail: detail,
    });
  }
}
