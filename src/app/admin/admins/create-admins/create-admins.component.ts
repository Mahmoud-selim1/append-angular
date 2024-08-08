import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/apiServ/admin.service';
import { AdminModel } from 'src/app/models/adminModel';

@Component({
  selector: 'app-create-admins',
  templateUrl: './create-admins.component.html',
  styleUrls: ['./create-admins.component.css'],
})
export class CreateAdminsComponent {
  obj = new AdminModel();
  constructor(private serv: AdminService, private route: Router) {
    serv.auth();
  }
  add() {
    this.serv.create(this.obj).subscribe((data: any) => {
      this.route.navigateByUrl('/list-admin');
    });
  }
}
