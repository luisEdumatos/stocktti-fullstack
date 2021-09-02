import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';

import { ClientComponent } from './client/components/client.component';
import { HardwareComponent } from './hardware/components/hardware.component';
import { ClientDetailComponent } from './client-detail/components/client-detail.component';
import { ClientCreateComponent } from './client/components/client-create.component';
import { HardwareDetailComponent } from './hardware-detail/components/hardware-detail.component';
import { HeaderComponent } from './header/components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HardwareComponent,
    ClientDetailComponent,
    HardwareDetailComponent,
    HeaderComponent,
    ClientCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
