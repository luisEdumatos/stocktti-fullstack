import { Component, OnInit, Input } from '@angular/core';
import { BroadCastService } from 'src/app/broadcast.service';
import { Hardware } from '../models/hardware';
import { HardwareService } from '../services/hardware.service';
import { ConfirmationService } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-hardware',
  templateUrl: '../templates/hardware.component.html',
  styleUrls: ['../styles/hardware.component.css'],
  providers: [MessageService]
})
export class HardwareComponent implements OnInit {

  @Input() hardwares?: Hardware[];
  @Input() client_id?: number;

  filteredHardwares: Hardware[];
  _filterBy: string;
  spinner = false;

  constructor(private hardwareService: HardwareService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.broadCast();
    this.filteredHardwares = this.hardwares;
  }

  deleteById(hardware_id: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este equipamento??',
      accept: () => {
        BroadCastService.get("spinner").emit(true);
        this.hardwares = this.hardwares.filter(h => h.id !== hardware_id);
        this.filteredHardwares = this.filteredHardwares.filter(h => h.id !== hardware_id);
        this.hardwareService.deleteById(hardware_id).subscribe({
          next: () => {
            console.log(`Hardware with id ${hardware_id} deleted with sucess. `);
            BroadCastService.get("spinner").emit(false);
            this.messageService.add({severity:'success', summary: 'Sucesso!', detail: 'O equipamento foi removido do inventário.'});
          },
          error: err => {
            console.log('Error', err);
            BroadCastService.get("spinner").emit(false);
            this.messageService.add({severity:'error', summary: 'Erro...', detail: 'Ocorreu um erro ao deletar. Contate o administrador.'});
          }
        });
      }
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredHardwares = this.hardwares.filter((hardware: Hardware) => hardware.deviceOwnerUserName.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

  broadCast(): void {
    BroadCastService.get("spinner").subscribe((spinner: boolean) => {
      this.spinner = spinner;
    });
  }
}
