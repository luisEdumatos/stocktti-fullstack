import { HardwareClient } from "../models-enums/hardwareClient";

export class HardwareCreate {
  client: HardwareClient;
  deviceLocalization: string;
  deviceOwnerUserName: string;
  deviceTag: string;
  deviceType: string = "DESKTOP";
  deviceBrand: string;
  deviceModel: string;
  deviceSO: string;
  deviceSOLicensed: boolean = false;
  deviceOfficeLicensed: boolean = false;
  deviceAntivirusLicensed: boolean = false;
  deviceProcessor: string;
  deviceProcessorGeneration: string;
  deviceProcessorGHZ: string;
  deviceRAM: string;
  deviceHD: string;
  deviceStatusCondition: string = "MODERNO";
  deviceSwapPrediction: string;
}
