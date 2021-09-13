import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientCreate } from '../models/client-create';
import { ClientService } from '../services/client.service';
import { BroadCastService } from 'src/app/broadcast.service';

@Component({
  selector: 'app-client-create',
  templateUrl: '../templates/client-create.component.html',
  styleUrls: ['../styles/client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  _clientCreate: ClientCreate;

  formClient: FormGroup;

  spinner = false;

  constructor(private clientService: ClientService, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.broadCast();
    this._clientCreate = new ClientCreate();
    this.formClient = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        cnpj: ['', Validators.required]
    });
  }

  get validation() {
    return this.formClient.controls;
  }

  createClient(): void {
    BroadCastService.get("spinner").emit(true);
    this.clientService.createClient(this._clientCreate).subscribe({
      next: client => {
        console.log('Client create with sucess', client);
        BroadCastService.get("spinner").emit(false);
      },
      error: err => {
        console.log('Error', err);
        BroadCastService.get("spinner").emit(false);
      }
    });
    alert('Novo Cliente adicionado com sucesso!');
    this.location.back();
  }

  broadCast(): void {
    BroadCastService.get("spinner").subscribe((spinner: boolean) => {
      this.spinner = spinner;
    });
  }

}
