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

import { ClientComponent } from './business/client/components/client.component';
import { HardwareComponent } from './business/hardware/components/hardware.component';
import { ClientDetailComponent } from './business/client/components/client-detail.component';
import { ClientCreateComponent } from './business/client/components/client-create.component';
import { HardwareDetailComponent } from './business/hardware/components/hardware-detail.component';
import { HardwareCreateComponent } from './business/hardware/components/hardware-create.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { authInterceptorProviders } from './security/_helpers/auth.interceptor';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HardwareComponent,
    ClientDetailComponent,
    HardwareDetailComponent,
    HeaderComponent,
    ClientCreateComponent,
    HardwareCreateComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent
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
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
