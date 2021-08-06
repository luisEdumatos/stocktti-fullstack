import { HardwareDTO } from './../../hardwares/models/hardwareDTO';
export class ClientInfoDTO {
  id: number;
  name: string;
  cnpj: string;
  address: string;
  equipment: HardwareDTO[];
}
