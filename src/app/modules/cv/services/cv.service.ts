import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'src/app/shared/models/GeneralResponse';
import { Observable } from 'rxjs';
import { CVRequestModel } from '../models/cv-request-model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  AddCV(cvRequest: CVRequestModel): Observable<GeneralResponse<any>> {
    return this.httpClient.post<GeneralResponse<any>>(`${this.apiUrl}/api/CVs`, cvRequest);
  }

  GetCV(): Observable<GeneralResponse<any>> {
    return this.httpClient.get<GeneralResponse<any>>(`${this.apiUrl}/api/CVs`);
  }
}
