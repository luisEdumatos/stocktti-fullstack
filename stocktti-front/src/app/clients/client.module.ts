import { ClientInfoComponent } from './components/client-info.component';
import { ClientListComponent } from './components/client-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'clients', component: ClientListComponent
      },
      {
        path: 'clients/info/:id', component: ClientInfoComponent
      }
    ])
  ]
})

export class ClientModule { }
