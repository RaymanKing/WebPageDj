import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  usuario : string | null = localStorage.getItem('usuario');

  constructor() { }

  ngOnInit(): void {
  }

  disconect(){
    localStorage.setItem('usuario', '');
    location.reload();
  }

}
