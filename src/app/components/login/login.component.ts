import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario : Usuario;

  constructor(private router : Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  /**
   * Metodo que valida el usuario
   */
  validarLogin(){
    if(this.usuario.user == 'admin' && this.usuario.pass == 'admin123'){
     this.router.navigateByUrl("/menu");
    } else{
     alert("Usuario y/o contraseña incorrectos");
    }
  }

}
