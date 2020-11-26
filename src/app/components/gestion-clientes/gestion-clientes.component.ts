import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {

  constructor(private router : Router) {

   }

  ngOnInit(): void {
  }

  /**
   * Metodo para regresar
   */
  volverMenuPrincipal(){
    this.router.navigateByUrl("/menu");
   }

}
