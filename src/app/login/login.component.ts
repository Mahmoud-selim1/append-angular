import { Component } from '@angular/core';
import { AdminService } from '../apiServ/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private serv: AdminService, private router: Router) {}
  userMail!: string;
  userPass!: string;
  mass = '';
  login() {
    this.serv.get().subscribe((data: any) => {
      let user = data.find((userData: any) => {
        return (
          userData.adminMail == this.userMail &&
          userData.adminPass == this.userPass
        );
      });
      if (user) {
        localStorage.setItem('admin', user);
        this.router.navigateByUrl('/admin');
      } else {
        this.mass = 'Flase Admin information';
        setTimeout(() => {
          this.mass = '';
        }, 1000);
      }
    });
  }
}
