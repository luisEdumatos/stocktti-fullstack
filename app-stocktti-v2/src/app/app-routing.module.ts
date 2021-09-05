import { HardwareCreateComponent } from './hardware/components/hardware-create.component';
import { HardwareDetailComponent } from './hardware/components/hardware-detail.component';
import { ClientDetailComponent } from './client/components/client-detail.component';
import { ClientComponent } from './client/components/client.component';
import { ClientCreateComponent } from './client/components/client-create.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/create-client', component: ClientCreateComponent },
  { path: 'clients/info/:id', component: ClientDetailComponent },
  { path: 'clients/info/:id/hardware/:hardware_id', component: HardwareDetailComponent },
  { path: 'clients/info/:id/hardware-create', component: HardwareCreateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
