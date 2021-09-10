import { AuthGuard } from './security/_services/auth.guard';
import { HardwareCreateComponent } from './business/hardware/components/hardware-create.component';
import { HardwareDetailComponent } from './business/hardware/components/hardware-detail.component';
import { ClientDetailComponent } from './business/client/components/client-detail.component';
import { ClientComponent } from './business/client/components/client.component';
import { ClientCreateComponent } from './business/client/components/client-create.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

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
      { path: 'register', component: RegisterComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
