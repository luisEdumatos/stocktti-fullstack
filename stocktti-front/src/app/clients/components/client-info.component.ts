import { HardwareInfoDTO } from './../../hardwares/models/hardware-infoDTO';
import { ClientInfoDTO } from './../models/client-infoDTO';
import { ClientService } from '../services/client.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: '../templates/client-info.component.html',
  styleUrls: ['../styles/client-info.component.css']
})

export class ClientInfoComponent implements OnInit {

  _client: ClientInfoDTO;
  hardware: Array<HardwareInfoDTO>;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: client => this._client = client,
      error: err => console.log('Error', err)
    });
  }
}
