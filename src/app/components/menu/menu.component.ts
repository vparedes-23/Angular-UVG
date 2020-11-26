import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

    /**
   * Metodo para regresar
   */
  regresar(){
     this.router.navigateByUrl("/login");
    }

      /**
   * Metodo que muestra el mensaje acerca de
   */
  acercaDe(){
    //this.router.navigateByUrl("/login");
    alert('Sistema creado por Futuro Ing. Luis Samayoa, todos los derechos reservados.');
   }

 /**
   * Metodo que navega al modulo de clientes
   */
  MenuCliente(){
    this.router.navigateByUrl("/gestion-clientes");
  }

  MenuProducto(){
    this.router.navigateByUrl("/gestion-productos");
    //alert('Ahorita voy a navegar al modulo de Productos');
  }

  Administracion(){
    this.router.navigateByUrl("/administracion-sistema");
    //alert('Ahorita voy a navegar al modulo Administracion');
  }

}
