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

  usuarios: any;

  constructor(private firestoreService : FirestoreService) {
  }

  ngOnInit(): void {

  }

  registrar(){
    if(this.password == this.confpassword && this.password != '' && this.confpassword != ''){
      let data = {
        nombre : this.nombre,
        email : this.email,
        password : this.password
      }
      // Recorrer todos los usuarios
      this.firestoreService.getUsers().subscribe(res =>(this.usuarios = res));
      console.log(this.usuarios[0].payload.doc.data())
      //console.log(this.usuarios.length)
      let o = 0;
      for(let i = 0 ; i < this.usuarios.length; i++){
        //console.log(this.usuarios[i].payload.doc.data().email)
        if(this.usuarios[i].payload.doc.data().email == this.email){
          o++;
        }
      }
      if(o == 0){
        this.firestoreService.createUser(data).then(() => {
          alert('Usuario añadido con éxito');
        }, (error) => {
          console.log(error);
        });
      }else{
        alert('Este correo ya está en uso, tenemos disponible la opción de recordar su contraseña');
      }
    }else{
      alert('Introduce la misma contraseña');
    }
  }

}
