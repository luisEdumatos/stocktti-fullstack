import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientDetail } from '../models/client-detail';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {

  private clientUrl: string = 'http://localhost:8080/api/v1/client';

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<ClientDetail> {
    return this.httpClient.get<ClientDetail>(`${this.clientUrl}/${id}`);
  }

  update(client: ClientDetail): Observable<ClientDetail> {
    return this.httpClient.put<ClientDetail>(`${this.clientUrl}/${client.id}`, client);
  }
}
