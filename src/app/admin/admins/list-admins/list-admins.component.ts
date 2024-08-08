import { Component } from '@angular/core';
import { AdminService } from 'src/app/apiServ/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css'],
})
export class ListAdminsComponent {
  allData!: any[];
  message = '';
  show() {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
  constructor(private serv: AdminService) {
    this.show();
    serv.auth();
  }
  deleteAdmin(id: any) {
    this.serv.delete(id).subscribe((data: any) => {
      this.message = `Delete admin of id : ${id}`;
      setTimeout(() => {
        this.message = ``;
      }, 1500);
    });
    this.show();
  }
}
