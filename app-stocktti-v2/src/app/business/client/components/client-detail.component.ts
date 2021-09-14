import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientDetail } from '../models/client-detail';
import { ClientService } from '../services/client.service';
import { BroadCastService } from 'src/app/broadcast.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-client-detail',
  templateUrl: '../templates/client-detail.component.html',
  styleUrls: ['../styles/client-detail.component.css'],
  providers: [MessageService]
})
export class ClientDetailComponent implements OnInit {

  _client: ClientDetail;

  formClient: FormGroup;

  spinner = false;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.broadCast();
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
    BroadCastService.get("spinner").emit(true);
    this.clientService.findById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: client => {
        this._client = client;
        BroadCastService.get("spinner").emit(false);
      },
      error: err => {
        console.log('Error', err);
        BroadCastService.get("spinner").emit(false);
      }
    });
  }

  update(): void {
    BroadCastService.get("spinner").emit(true);
    this.clientService.update(this._client).subscribe({
      next: client => {
        console.log('Client saved with success');
        BroadCastService.get("spinner").emit(false);
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail: 'As informações do cliente foram atualizadas.'});
      },
      error: err =>  {
        console.log(`Error`, err);
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Ocorreu um erro na atualização, verifique novamente os campos.'});
        BroadCastService.get("spinner").emit(false);
      }
    });
  }

  broadCast(): void {
    BroadCastService.get("spinner").subscribe((spinner: boolean) => {
      this.spinner = spinner;
    });
  }
}
