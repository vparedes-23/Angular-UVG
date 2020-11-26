import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Paginas
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { AdministracionSistemaComponent } from './components/administracion-sistema/administracion-sistema.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'gestion-clientes', component: GestionClientesComponent},
  {path: 'gestion-productos', component: GestionProductosComponent},
  {path: 'administracion-sistema', component: AdministracionSistemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
