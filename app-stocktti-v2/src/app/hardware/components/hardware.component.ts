import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from '../models/hardware';
import { HardwareService } from '../services/hardware.service';

@Component({
  selector: 'app-hardware',
  templateUrl: '../templates/hardware.component.html',
  styleUrls: ['../styles/hardware.component.css']
})
export class HardwareComponent implements OnInit {

  @Input() hardwares?: Hardware[];
  @Input() client_id?: number;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
  }

  deleteById(hardware_id: number): void {
    this.hardwares = this.hardwares.filter(h => h.id !== hardware_id);
    this.hardwareService.deleteById(hardware_id).subscribe({
      next: () => {
        console.log(`Hardware with id ${hardware_id} deleted with sucess. `);
      },
      error: err => console.log('Error', err)
    })
  }

}
