import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormProfileComponent } from './components/dashboard/form-profile/form-profile.component';
import { FormUnidadesComponent } from './components/dashboard/form-unidades/form-unidades.component';
import { FormEquiposComponent } from './components/dashboard/form-equipos/form-equipos.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { UnidadesComponent } from './components/views/unidades/unidades.component';
import { EquiposComponent } from './components/views/equipos/equipos.component';
import { RealUnidadesComponent } from './components/realTime/real-unidades/real-unidades.component';
import { NotPageComponent } from './components/not-page/not-page.component';
import { FormControl } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    children: [
      { path: 'profile', component: FormProfileComponent },
      { path: 'unidades', component: FormUnidadesComponent },
      { path: 'equipos', component: FormEquiposComponent },
    ]
  },
  {
    path: 'views',
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'unidades', component: UnidadesComponent },
      { path: 'equipos', component: EquiposComponent },
    ]
  },
  {
    path: 'gps',
    children: [
      { path: 'unidades', component: RealUnidadesComponent },
    ]
  },
  { path: '**', component: NotPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
