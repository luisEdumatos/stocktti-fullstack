import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HardwareDetail } from '../models/hardware-detail';

@Injectable({
  providedIn: 'root'
})
export class HardwareDetailService {
  private hardwareUrl: string = 'http://localhost:8080/api/v1/hardware';

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<HardwareDetail> {
    return this.httpClient.get<HardwareDetail>(`${this.hardwareUrl}/${id}`);
  }

  update (hardwareDetail: HardwareDetail): Observable<HardwareDetail> {
    return this.httpClient.put<HardwareDetail>(`${this.hardwareUrl}/${hardwareDetail.id}`, hardwareDetail);
  }
}
