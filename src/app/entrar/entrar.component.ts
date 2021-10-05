import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit()  {
    window.scroll(0,0)
  }

  entrar(){
  this.auth.entrar(this.userLogin).subscribe((resp: UsuarioLogin)=>{
    this.userLogin = resp

    environment.token = this.userLogin.token
    environment.nomeUsuario = this.userLogin.nomeUsuario
    environment.foto = this.userLogin.foto
    environment.idUsuario = this.userLogin.idUsuario

    console.log(environment.token)
    console.log(environment.nomeUsuario)
    console.log(environment.foto)
    console.log(environment.idUsuario)

    this.router.navigate(["/inicio"])
  }, erro =>{
    if(erro.status == 500){
      alert("Usuário ou senha estão incorretos!")
    }

  })
  }

}
