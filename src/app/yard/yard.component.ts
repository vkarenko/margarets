import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.scss']
})

export class YardComponent implements OnInit {
  sounds = {
     bike: 'assets/sounds/bike.mp3',
     postbox: 'assets/sounds/mailbox.mp3'
  };

  welcomeStatus = true;
  showPostcard = false;

  constructor() { }

  ngOnInit() {
  }

  playSound(sound): void {
    const audio = new Audio(sound);
    audio.play();
  }

  openMailbox(): void {
    this.playSound(this.sounds.postbox);
    this.showPostcard = true;
  }
}
