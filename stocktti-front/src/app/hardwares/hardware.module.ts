import { HardwareInfoComponent } from "./components/hardware-info.component";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HardwareInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'clients/info/:id/hardware/:hardware_id', component: HardwareInfoComponent
      }
    ])
  ]
})

export class HardwareModule { }
