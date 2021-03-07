import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase-admin';
import { Observable } from 'rxjs';
import { Post } from 'src/app/post.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  postsCollectionRef: any;
  constructor(
    private firestore: AngularFirestore
  ) {}


  //Crea un nuevo usuario
  public createUser(data: {nombre: string, email: string, password : string}) {
    return this.firestore.collection('users').add(data);
  }

  //Crea un nuevo post
  public createPost(data: {user: string | null, idUser: number, comentario : string, url : string, type : number, date : Date}) {
    return this.firestore.collection('posts').add(data);
  }

  //Obtener todos los posts
  public getPosts() {
    //return this.firestore.collection('posts', ref => ref.orderBy('date','desc'));
    return this.firestore.collection('posts').snapshotChanges();
  }

  //Obtiene un usuario
  public getUser(email: string) {
    return this.firestore.collection('cats').doc(email).snapshotChanges();
  }
  //Obtiene todos los usuarios
  public getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  //Borrar un usuario
  public deletePost(data : string){
    this.firestore.collection('posts').doc(data).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.reload();
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });;
  }
}
