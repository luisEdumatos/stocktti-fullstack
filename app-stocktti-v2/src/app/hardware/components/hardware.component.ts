import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from '../models/hardware';

@Component({
  selector: 'app-hardware',
  templateUrl: '../templates/hardware.component.html',
  styleUrls: ['../styles/hardware.component.css']
})
export class HardwareComponent implements OnInit {

  @Input() hardwares?: Hardware[];
  @Input() client_id?: number;

  constructor() { }

  ngOnInit() {
  }

}
