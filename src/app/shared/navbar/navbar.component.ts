import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  login = true;
  constructor() {
    if (localStorage.getItem('admin')) {
      this.login = true;
    } else {
      this.login = false;
    }
  }
  remve() {
    localStorage.removeItem('admin');
  }
}
