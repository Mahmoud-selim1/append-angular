import { Component } from '@angular/core';
import { AdminService } from '../apiServ/admin.service';
import { AdminModel } from '../models/adminModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-admin',
  templateUrl: './static-admin.component.html',
  styleUrls: ['./static-admin.component.css'],
})
export class StaticAdminComponent {
  obj = new AdminModel();
  id!: any;
  constructor(private serv: AdminService, activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params?.['id'];
    serv.getById(this.id).subscribe((data: any) => {
      console.log(data);
      this.obj = data;
    });
  }
}
