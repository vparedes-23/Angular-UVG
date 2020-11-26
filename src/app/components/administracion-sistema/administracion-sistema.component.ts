import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion-sistema',
  templateUrl: './administracion-sistema.component.html',
  styleUrls: ['./administracion-sistema.component.css']
})
export class AdministracionSistemaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  /**
   * Metodo para regresar
   */
  volverMenuPrincipal(){
    this.router.navigateByUrl("/menu");
   }
}
