import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}


  //Crea un nuevo usuario
  public createUser(data: {nombre: string, email: string, password : string}) {
    return this.firestore.collection('users').add(data);
  }

  //Obtiene un usuario
  public getUser(email: string) {
    return this.firestore.collection('cats').doc(email).snapshotChanges();
  }
  //Obtiene todos los usuarios
  public getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }
}
