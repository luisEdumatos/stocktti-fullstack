import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HardwareDetail } from '../models/hardware-detail';
import { HardwareDetailService } from '../services/hardware-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: '../templates/hardware-detail.component.html',
  styleUrls: ['../styles/hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  _hardware: HardwareDetail;

  constructor(private activatedRoute: ActivatedRoute, private hardwareDetailService: HardwareDetailService, private location: Location) { }

  ngOnInit() {
    this.getHardwareById();
  }

  getHardwareById(): void {
    this.hardwareDetailService.findById(+this.activatedRoute.snapshot.paramMap.get('hardware_id')).subscribe({
      next: hardware => this._hardware = hardware,
      error: err => console.log('Error', err)
    });
  }

  goBack(): void {
    this.location.back();
  }
}
