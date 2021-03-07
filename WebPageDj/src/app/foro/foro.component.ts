import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../post.model';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  usuario : string | null = localStorage.getItem('usuario');
  logged : string | null = localStorage.getItem('iduser');
  user : string = '';
  comentario : string = '';
  idUser : number = 0;
  url : string = '';
  type : number = 0;
  i: number = 0;
  posts : any = [];
  postsList : Array<Post> = [];
  log : number = 0;
  ids : any = [];

  modal : NgbModalRef | undefined;

  closeResult = '';

  constructor(private modalService: NgbModal, private firestoreService : FirestoreService) {

  }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
    let i = localStorage.getItem('iduser');
    this.idUser = this.i;
    this.logged = localStorage.getItem('iduser')

    //console.log(this.usuario+ ' '+ this.idUser)
    //this.posts = this.firestoreService.getPosts();
    this.firestoreService.getPosts().subscribe(res =>{this.posts = res
      this.posts.map((p : any) => {
        this.postsList.push(p.payload.doc.data());
        this.ids.push(p.payload.doc.id);
      })
    });
  }

  disconect(){
    localStorage.setItem('usuario', '');
    localStorage.setItem('correo', '');
    localStorage.setItem('iduser', '');
    location.reload();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  platform(plat : number){
    this.type = plat;
  }

  deletePost(post : Post){
    for(let i = 0; i < this.posts.length; i++){
      //console.log(this.posts[i].payload.doc.id)
      if(this.postsList[i].user == post.user && this.postsList[i].comentario == post.comentario){
        let data = this.posts[i];
        console.log(typeof(data))
        this.firestoreService.deletePost(data.payload.doc.id);
        //window.location.href="../foro";
        //window.location.reload();
      }
    }
  }

  post(){
    let user = this.usuario;
    console.log(this.logged)
    //console.log('user:'+user+' |iduser:'+ this.idUser+' |comentario:'+ this.comentario+' |url:'+ this.url+' |type:'+ this.type);
    /*data: {user: string, idUser: number, comentario : string, url : string, type : number}*/
    let data = {
      user: user,
      idUser : Number(this.logged),
      comentario : this.comentario,
      url : this.url,
      type : this.type,
      date: new Date()
    }
    if(this.comentario != ''){

      this.firestoreService.createPost(data).then(() => {
        window.location.reload();
      }, (error) => {
        console.log(error);
      });
    }else{
      alert('Minimo requerimiento => Introducir comentario')
    }
  }
}
