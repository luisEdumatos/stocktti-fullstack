import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HardwareClient } from '../models-enums/hardwareClient';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HardwareCreate } from '../models/hardware-create';
import { HardwareService } from '../services/hardware.service';
import { DeviceConditions } from '../models-enums/deviceConditions';
import { IsLicensed } from '../models-enums/licensed';
import { DeviceTypes } from '../models-enums/deviceType';

@Component({
  selector: 'app-hardware-create',
  templateUrl: '../templates/hardware-create.component.html',
  styleUrls: ['../styles/hardware-create.component.css']
})

export class HardwareCreateComponent implements OnInit {

  _hardwareCreate: HardwareCreate;
  deviceConditions: DeviceConditions = new DeviceConditions();
  deviceLicensed: IsLicensed = new IsLicensed();
  deviceType: DeviceTypes = new DeviceTypes();

  formHardware: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private hardwareService: HardwareService, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this._hardwareCreate = new HardwareCreate();
    this._hardwareCreate.client = new HardwareClient();
    this._hardwareCreate.client.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.formHardware = this.fb.group({
      deviceLocalization: ['', Validators.required],
      deviceOwnerUserName: ['', Validators.required],
      deviceTag: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      deviceBrand: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      deviceModel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      deviceSO: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      deviceProcessor: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      deviceProcessorGeneration: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      deviceProcessorGHZ: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      deviceRAM: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      deviceHD: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      deviceSwapPrediction: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

  get validation() {
    return this.formHardware.controls;
  }

  createHardware(): void {
    this.hardwareService.createHardware(this._hardwareCreate).subscribe({
      next: hardware => console.log('Hardware create with sucess', hardware),
      error: err => console.log('Error', err)
    });
    alert('Novo Hardware adicionado com sucesso!');
    this.location.back();
  }

}
