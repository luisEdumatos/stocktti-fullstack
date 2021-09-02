import { HardwareClient } from './../models/hardwareClient';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HardwareCreate } from '../models/hardware-create';
import { HardwareService } from '../services/hardware.service';

@Component({
  selector: 'app-hardware-create',
  templateUrl: '../templates/hardware-create.component.html',
  styleUrls: ['../styles/hardware-create.component.css']
})

export class HardwareCreateComponent implements OnInit {

  _hardwareCreate: HardwareCreate;

  constructor(private activatedRoute: ActivatedRoute, private hardwareService: HardwareService) { }

  ngOnInit(): void {
    this._hardwareCreate = new HardwareCreate();
    this._hardwareCreate.client = new HardwareClient();
    this._hardwareCreate.client.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  }

  createHardware(): void {
    this.hardwareService.createHardware(this._hardwareCreate).subscribe({
      next: hardware => console.log('Hardware create with sucess', hardware),
      error: err => console.log('Error', err)
    });
  }

}
