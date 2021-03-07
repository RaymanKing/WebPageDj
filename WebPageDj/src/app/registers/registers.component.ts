import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  nombre : string = '';
  email : string = '';
  password : string = '';
  confpassword : string = '';

  usuarios: any = [];

  constructor(private firestoreService : FirestoreService) {
    this.firestoreService.getUsers().subscribe(res =>{this.usuarios = res});
  }

  ngOnInit(): void {

  }

  registrar(){
    if(this.password == this.confpassword && this.password != '' && this.confpassword != '' && this.email != '' && this.nombre != ''){
      //console.log(this.usuarios[0].payload.doc.data())
      //console.log(this.usuarios.length)
      let o = 0;
      for(let i = 0 ; i < this.usuarios.length; i++){
        //console.log(this.usuarios[i].payload.doc.data().email)
        if(this.usuarios[i].payload.doc.data().email == this.email){
          o++;
        }
      }

      // REGEX COMPROBACION EMAIL
      const emailRegex : RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let p = emailRegex.test(this.email);
      if(p){
        let data = {
          id: this.usuarios.length,
          nombre : this.nombre,
          email : this.email,
          password : this.password
        }
        if(o == 0){
          this.firestoreService.createUser(data).then(() => {
            alert('Usuario añadido con éxito');
            window.location.href='../../foro/login';
          }, (error) => {
            console.log(error);
          });
        }else{
          alert('Este correo ya está en uso, tenemos disponible la opción de recordar su contraseña');
        }
      }else{
        alert('Introduce un correo correcto');
      }
    }else{
      if(this.password == '' && this.confpassword == '' && this.email == '' && this.nombre == ''){
        alert('Rellena todos los campos');
      }else if(this.password != this.confpassword){
        alert('Las contraseñas no coinciden');
      }
    }
  }

}
