import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HardwareInfoDTO } from "../models/hardware-infoDTO";

@Injectable({
  providedIn: 'root'
})

export class HardwareService {
  private hardwareUrl: string = 'http://localhost:8080/api/v1/hardware';

  constructor(private httpClient: HttpClient) {

  }

  retrieveById(hardware_id: number): Observable<HardwareInfoDTO> {
    return this.httpClient.get<HardwareInfoDTO>(`${this.hardwareUrl}/${hardware_id}`);
  }

  deleteById(hardware_id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.hardwareUrl}/${hardware_id}`);
  }

}
