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

  filteredHardwares: Hardware[];
  _filterBy: string;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
    this.filteredHardwares = this.hardwares;
  }

  deleteById(hardware_id: number): void {
    const confirma = confirm(`Tem certeza que deseja excluir este equipamento?`);
    if (confirma) {
      this.hardwares = this.hardwares.filter(h => h.id !== hardware_id);
      this.filteredHardwares = this.filteredHardwares.filter(h => h.id !== hardware_id);
      this.hardwareService.deleteById(hardware_id).subscribe({
        next: () => {
          console.log(`Hardware with id ${hardware_id} deleted with sucess. `);
        },
        error: err => console.log('Error', err)
      })
    }
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredHardwares = this.hardwares.filter((hardware: Hardware) => hardware.deviceOwnerUserName.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
