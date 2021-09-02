import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client',
  templateUrl: '../templates/client.component.html',
  styleUrls: ['../styles/client.component.css']
})
export class ClientComponent implements OnInit {

  filteredClients: Client[] = [];

  _clients: Client[] = [];

  _filterBy: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.listAll().subscribe({
      next: clients => {
        this._clients = clients;
        this.filteredClients = this._clients;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(client_id: number): void {
    this.clientService.deleteById(client_id).subscribe({
      next: () => {
        console.log(`Client with id ${client_id} deleted with sucess. `);
        this.getClients();
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredClients = this._clients.filter((client: Client) => client.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
