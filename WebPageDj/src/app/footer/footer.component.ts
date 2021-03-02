import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  num : number = 0;

  constructor() { }

  ngOnInit(): void {
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
