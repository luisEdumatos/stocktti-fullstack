import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from '../models/client';
import { ClientCreate } from '../models/client-create';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl: string = 'http://localhost:8080/api/v1/client';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientsUrl);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.clientsUrl}/${id}`);
  }

  createClient(client: ClientCreate): Observable<ClientCreate> {
    return this.httpClient.post<ClientCreate>(`${this.clientsUrl}`, client);
  }

}
