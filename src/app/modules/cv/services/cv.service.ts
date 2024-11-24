import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'src/app/shared/models/GeneralResponse';
import { Observable } from 'rxjs';
import { CVMOdel, CVRequestModel } from '../models/cv-request-model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  GetCV(): Observable<GeneralResponse<any>> {
    return this.httpClient.get<GeneralResponse<any>>(`${this.apiUrl}/api/CVs`);
  }

  AddCV(cvRequest: CVRequestModel): Observable<GeneralResponse<any>> {
    return this.httpClient.post<GeneralResponse<any>>(`${this.apiUrl}/api/CVs`, cvRequest);
  }

  UpdateCV(cvRequest: CVMOdel): Observable<GeneralResponse<any>> {
    return this.httpClient.put<GeneralResponse<any>>(`${this.apiUrl}/api/CVs`, cvRequest);
  }

  DeleteCV(id: number): Observable<GeneralResponse<any>> {
    return this.httpClient.delete<GeneralResponse<any>>(`${this.apiUrl}/api/CVs?id=${id}`);
  }


}
