import { Hardware } from "../../hardware/models/hardware";

export class ClientDetail {
  id: number;
  name: string;
  cnpj: string;
  address: string;
  equipment: Array<Hardware>
}

