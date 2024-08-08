import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/apiServ/admin.service';
import { AdminModel } from 'src/app/models/adminModel';

@Component({
  selector: 'app-update-admins',
  templateUrl: './update-admins.component.html',
  styleUrls: ['./update-admins.component.css'],
})
export class UpdateAdminsComponent {
  obj = new AdminModel();
  id!: any;
  constructor(
    private serv: AdminService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    serv.auth();
    this.id = activeRoute.snapshot.paramMap.get('id');
    serv.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    });
  }
  update() {
    this.serv.put(this.id, this.obj).subscribe((data: any) => {
      this.router.navigateByUrl('/list-admin');
    });
  }
}
