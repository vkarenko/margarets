import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],

  animations: [
    trigger('navState', [
      state('active', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('inactive', style({
        transform: 'translateY(-30rem)',
        opacity: 0
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),
  ]
})

export class NavMenuComponent implements OnInit {
  showNav = false;
  navAnimation = 'inactive';
  menuList = [
    { name: 'front yard', link: '' },
    { name: 'all rooms', link: 'rooms' },
    { name: 'kitchen', link: 'kitchen' },
    { name: 'tv room', link: 'tv' },
    { name: 'library', link: 'library' }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleNavAnimation(): void {
    if (this.showNav) {
      this.navAnimation = 'inactive',

      setTimeout(() => {
        this.showNav = false;
      }, 300);
    } else {
      this.showNav = true;

      setTimeout(() => {
        this.navAnimation = 'active';
      }, 0);
    }
  }

  hideNav(): void {
    this.navAnimation = 'inactive';

    setTimeout(() => {
      this.showNav = false;
    }, 300);
  }
}
