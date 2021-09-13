import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HardwareDetail } from '../models/hardware-detail';
import { HardwareService } from '../services/hardware.service';
import { ActivatedRoute } from '@angular/router';
import { DeviceConditions } from '../models-enums/deviceConditions';
import { IsLicensed } from '../models-enums/licensed';
import { DeviceTypes } from '../models-enums/deviceType';
import { BroadCastService } from 'src/app/broadcast.service';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: '../templates/hardware-detail.component.html',
  styleUrls: ['../styles/hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  _hardware: HardwareDetail;
  deviceConditions: DeviceConditions = new DeviceConditions();
  deviceLicensed: IsLicensed = new IsLicensed();
  deviceType: DeviceTypes = new DeviceTypes();
  formHardware: FormGroup;
  spinner = false;

  constructor(private activatedRoute: ActivatedRoute, private hardwareService: HardwareService, private location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.broadCast();
    this.getHardwareById();
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

  getHardwareById(): void {
    BroadCastService.get("spinner").emit(true);
    this.hardwareService.findById(+this.activatedRoute.snapshot.paramMap.get('hardware_id')).subscribe({
      next: hardware => {
        this._hardware = hardware;
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
    this.hardwareService.update(this._hardware).subscribe({
      next(hardware) {
        console.log('Hardware saved with success');
        BroadCastService.get("spinner").emit(false);
        alert('Hardware atualizado com sucesso!');
      },
      error: err => {
        console.log(`Error`, err);
        BroadCastService.get("spinner").emit(false);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  broadCast(): void {
    BroadCastService.get("spinner").subscribe((spinner: boolean) => {
      this.spinner = spinner;
    });
  }
}
