import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from '../models/client';
import { ClientCreate } from '../models/client-create';
import { ClientDetail } from '../models/client-detail';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl: string = 'http://localhost:8080/api/v1/client';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientsUrl);
  }

  findById(id: number): Observable<ClientDetail> {
    return this.httpClient.get<ClientDetail>(`${this.clientsUrl}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.clientsUrl}/${id}`);
  }

  createClient(client: ClientCreate): Observable<ClientCreate> {
    return this.httpClient.post<ClientCreate>(`${this.clientsUrl}`, client);
  }

  update(client: ClientDetail): Observable<ClientDetail> {
    return this.httpClient.put<ClientDetail>(`${this.clientsUrl}/${client.id}`, client);
  }

}
