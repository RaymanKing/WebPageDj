import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nombre : string = '';
  correo : string = '';
  asunto : string = '';
  mensaje : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  goRed(num : number){
    if(num == 1){
      window.open('https://www.instagram.com/dj_raaymaan/', '_blank');
    }else if(num == 2){
      window.open('https://soundcloud.com/enrique-rapela-castejon', '_blank');
    }else{
      window.open('https://www.youtube.com/channel/UCE-FF4tZlCj7CkMlIr8tnZg', '_blank');
    }
  }

}
