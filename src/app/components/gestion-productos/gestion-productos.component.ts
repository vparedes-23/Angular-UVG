import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

    /**
   * Metodo para regresar
   */
  regresarMenuPrincipal(){
    this.router.navigateByUrl("/menu");
   }

}
