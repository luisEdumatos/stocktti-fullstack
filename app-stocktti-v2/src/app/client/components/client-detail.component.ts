import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientDetail } from '../models/client-detail';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: '../templates/client-detail.component.html',
  styleUrls: ['../styles/client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  _client: ClientDetail;

  formClient: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getClientById();
    this.formClient = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      cnpj: ['', Validators.required]
    });
  }

  get validation() {
    return this.formClient.controls;
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
