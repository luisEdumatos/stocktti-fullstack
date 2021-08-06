import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientInfoDTO } from "../models/client-infoDTO";
import { ClientDTO } from "../models/clientDTO";

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private clientsUrl: string = 'http://localhost:8080/api/v1/client';


  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<ClientDTO[]> {
    return this.httpClient.get<ClientDTO[]>(this.clientsUrl);
  }

  retrieveById(id: number): Observable<ClientInfoDTO> {
    return this.httpClient.get<ClientInfoDTO>(`${this.clientsUrl}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.clientsUrl}/${id}`);
  }
}
