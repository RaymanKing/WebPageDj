import { Component, OnInit } from '@angular/core';import { FirestoreService } from '../services/firestore/firestore.service';
;

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  num : number = 0;

  tracksList : any = [];
  urlLists : Array<string> = [];

  constructor(private firestoreService : FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getTracks().subscribe(res =>{this.tracksList = res
      this.tracksList.map((p : any) => {
        this.urlLists.push(p.payload.doc.data().url);
      })
    });
  }

  red(num : number){
    if(num == 1){
      window.open('https://www.instagram.com/dj_raaymaan/', '_blank');
    }else if(num == 2){
      window.open('https://www.youtube.com/channel/UCE-FF4tZlCj7CkMlIr8tnZg', '_blank');
    }else{
      window.open('https://soundcloud.com/enrique-rapela-castejon', '_blank');
    }
  }

}
