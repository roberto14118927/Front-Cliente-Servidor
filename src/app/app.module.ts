import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProfileComponent } from './components/dashboard/form-profile/form-profile.component';
import { FormUnidadesComponent } from './components/dashboard/form-unidades/form-unidades.component';
import { FormEquiposComponent } from './components/dashboard/form-equipos/form-equipos.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { UnidadesComponent } from './components/views/unidades/unidades.component';
import { EquiposComponent } from './components/views/equipos/equipos.component';
import { RealUnidadesComponent } from './components/realTime/real-unidades/real-unidades.component';
import { NotPageComponent } from './components/not-page/not-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormProfileComponent,
    FormUnidadesComponent,
    FormEquiposComponent,
    ProfileComponent,
    UnidadesComponent,
    EquiposComponent,
    RealUnidadesComponent,
    NotPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
