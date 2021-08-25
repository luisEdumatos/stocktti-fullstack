import { HardwareDetailComponent } from './hardware-detail/components/hardware-detail.component';
import { ClientDetailComponent } from './client-detail/components/client-detail.component';
import { ClientComponent } from './client/components/client.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientComponent},
  { path: 'clients/info/:id', component: ClientDetailComponent},
  { path: 'clients/info/:id/hardware/:hardware_id', component: HardwareDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
