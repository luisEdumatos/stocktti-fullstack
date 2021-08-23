import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { HardwareInfoDTO } from "../models/hardware-infoDTO";
import { HardwareService } from '../services/hardware.service';

@Component({
  templateUrl: '../templates/hardware-info.component.html',
  styleUrls: ['../styles/hardware-info.component.css']
})

export class HardwareInfoComponent implements OnInit {

  _hardware: HardwareInfoDTO;
  client_id: string;

  constructor(private activatedRoute: ActivatedRoute, private hardwareService: HardwareService) {
  }

  ngOnInit(): void {
    this.hardwareService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('hardware_id')).subscribe({
        next: hardware => this._hardware = hardware,
        error: err => console.log('Error', err)
    });
    this.client_id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
