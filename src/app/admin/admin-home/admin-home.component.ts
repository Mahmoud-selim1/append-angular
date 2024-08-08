import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/apiServ/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent {
  constructor(private serv: AdminService) {
    serv.auth();
  }
}
