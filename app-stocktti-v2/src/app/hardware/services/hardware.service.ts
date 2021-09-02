import { HardwareCreate } from './../models/hardware-create';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private hardwareUrl: string = 'http://localhost:8080/api/v1/hardware';

  constructor(private httpClient: HttpClient) { }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.hardwareUrl}/${id}`);
  }

  createHardware(hardware: HardwareCreate): Observable<HardwareCreate> {
    return this.httpClient.post<HardwareCreate>(`${this.hardwareUrl}`, hardware);
  }
}
