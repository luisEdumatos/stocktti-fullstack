import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/components/client.component';
import { HardwareComponent } from './hardware/components/hardware.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ClientDetailComponent } from './client-detail/components/client-detail.component';
import { HardwareDetailComponent } from './hardware-detail/components/hardware-detail.component';
import { HeaderComponent } from './header/components/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HardwareComponent,
    ClientDetailComponent,
    HardwareDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
