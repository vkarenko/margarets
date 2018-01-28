import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  showMenu: true;
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

}
