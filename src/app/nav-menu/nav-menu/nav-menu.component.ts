import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  home = 'HOME';
  profile = 'Profile';
  contact = 'Contact';
  gallery = 'Gallery';
  content = ` Hi guys my name is Kristine serad , I am currently 3rd year college at tacloban`;
  constructor() { }

  ngOnInit(): void {
  }

}
