import { ClientService } from '../services/client.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Client } from "../models/client";


@Component({
  templateUrl: '../templates/client-info.component.html'
})

export class ClientInfoComponent implements OnInit {

  client: Client;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: client => this.client = client,
      error: err => console.log('Error', err)
    });
  }


}
