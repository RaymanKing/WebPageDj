import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  usuarios: any = [];

  constructor(private firestoreService : FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getUsers().subscribe(res =>{this.usuarios = res});
  }

  login(){
    if(this.email != '' && this.password != ''){
      let verify = 0;
      let id_us = 0;
      for(let i = 0; i < this.usuarios.length; i++){
        if(this.usuarios[i].payload.doc.data().email == this.email && this.usuarios[i].payload.doc.data().password == this.password){
          verify++;
          id_us = i;
        }
      }
      if(verify == 1){
        localStorage.setItem('usuario', this.usuarios[id_us].payload.doc.data().nombre);
        localStorage.setItem('iduser', this.usuarios[id_us].payload.doc.data().id);
        localStorage.setItem('correo', this.usuarios[id_us].payload.doc.data().email);
        window.location.href='../../foro';
      }else{
        alert('Datos incorrectos, si olvidaste la contraseña, pinche en la opción para restablecerla');
      }
    }else{
      alert('Introduce todos los datos');
    }
  }

}
