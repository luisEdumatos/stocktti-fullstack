import { Component, OnInit } from '@angular/core';
import { ClientDetail } from '../models/client-detail';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-client-detail',
  templateUrl: '../templates/client-detail.component.html',
  styleUrls: ['../styles/client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  _client: ClientDetail;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.getClientById();
  }

  getClientById(): void {
    this.clientService.findById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: client => this._client = client,
      error: err => console.log('Error', err)
    });
  }

  update(): void {
    this.clientService.update(this._client).subscribe({
      next(client) {
        console.log('Client saved with success');
        alert('Cliente atualizado com sucesso!');
      },
      error: err => console.log(`Error`, err)
    });

  }

}
