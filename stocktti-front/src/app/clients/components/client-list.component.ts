import { ClientService } from '../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';

@Component({
  templateUrl: '../templates/client-list.component.html'
})

export class ClientListComponent implements OnInit {

  filteredClients: Client[] = [];

  _clients: Client[] = [];

  _filterBy: string;

  constructor (private clientService: ClientService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.clientService.retrieveAll().subscribe({
      next: clients => {
        this._clients = clients;
        this.filteredClients = this._clients;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(clientId: number): void {
    this.clientService.deleteById(clientId).subscribe({
      next: () => {
        console.log('Deleted with sucess');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredClients = this._clients.filter((client : Client) => client.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
