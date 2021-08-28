import { Component, OnInit } from '@angular/core';
import { ClientDetail } from '../models/client-detail';
import { ClientDetailService } from '../services/client-detail.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-client-detail',
  templateUrl: '../templates/client-detail.component.html',
  styleUrls: ['../styles/client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  _client: ClientDetail;
  value2: string;

  constructor(private activatedRoute: ActivatedRoute, private clientDetailService: ClientDetailService) { }

  ngOnInit() {
    this.getClientById();
  }

  getClientById(): void {
    this.clientDetailService.findById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: client => this._client = client,
      error: err => console.log('Error', err)
    });
  }

  update(): void {
    this.clientDetailService.update(this._client).subscribe({
      next: client => console.log(`Client with id ${this._client.id} saved with success`),
      error: err => console.log(`Error`, err)
    });
  }

}
