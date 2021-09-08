import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { HardwareCreateComponent } from './hardware/components/hardware-create.component';
import { HardwareDetailComponent } from './hardware/components/hardware-detail.component';
import { ClientDetailComponent } from './client/components/client-detail.component';
import { ClientComponent } from './client/components/client.component';
import { ClientCreateComponent } from './client/components/client-create.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: ClientComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'clients/create-client', component: ClientCreateComponent },
      { path: 'clients/info/:id', component: ClientDetailComponent },
      { path: 'clients/info/:id/hardware/:hardware_id', component: HardwareDetailComponent },
      { path: 'clients/info/:id/hardware-create', component: HardwareCreateComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
