import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientCreate } from '../models/client-create';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: '../templates/client-create.component.html',
  styleUrls: ['../styles/client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  _clientCreate: ClientCreate;

  cadastro: FormGroup;

  constructor(private clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._clientCreate = new ClientCreate();
    this.cadastro = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        cnpj: ['', Validators.required]
    });
  }

  get validation() {
    return this.cadastro.controls;
  }

  createClient(): void {
    this.clientService.createClient(this._clientCreate).subscribe({
      next: client => console.log('Client create with sucess', client),
      error: err => console.log('Error', err)
    });
  }

}
