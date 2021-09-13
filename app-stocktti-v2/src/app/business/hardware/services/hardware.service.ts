import { environment } from './../../../../environments/environment';
import { HardwareCreate } from './../models/hardware-create';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HardwareDetail } from '../models/hardware-detail';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private hardwareUrl: string = environment.apiUrl + 'hardware';

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<HardwareDetail> {
    return this.httpClient.get<HardwareDetail>(`${this.hardwareUrl}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.hardwareUrl}/${id}`);
  }

  createHardware(hardware: HardwareCreate): Observable<HardwareCreate> {
    return this.httpClient.post<HardwareCreate>(`${this.hardwareUrl}`, hardware);
  }

  update (hardwareDetail: HardwareDetail): Observable<HardwareDetail> {
    return this.httpClient.put<HardwareDetail>(`${this.hardwareUrl}/${hardwareDetail.id}`, hardwareDetail);
  }

}
