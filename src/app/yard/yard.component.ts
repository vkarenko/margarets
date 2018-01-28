import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.scss']
})

export class YardComponent implements OnInit {
  sounds = {
     bike: 'assets/sounds/bike.mp3'
  };

  welcomeStatus = true;

  constructor() { }

  ngOnInit() {
  }

  playSound(sound): void {
    const audio = new Audio(sound);
    audio.play();
  }

  onClickedOutside(): void {
    console.log('click outside');
  }
}
