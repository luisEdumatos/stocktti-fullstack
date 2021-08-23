import { HardwareInfoDTO } from './../../hardwares/models/hardware-infoDTO';
export class ClientInfoDTO {
  id: number;
  name: string;
  cnpj: string;
  address: string;
  equipment: Array<HardwareInfoDTO>;
}
