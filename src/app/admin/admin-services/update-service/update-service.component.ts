import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/apiServ/service.service';
import { ServicesModel } from 'src/app/models/servicesModel';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css'],
})
export class UpdateServiceComponent {
  obj = new ServicesModel();
  id!: any;
  constructor(
    private serv: ServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    serv.auth();
    this.id = activeRoute.snapshot.paramMap.get('id');
    serv.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    });
  }
  updateService() {
    this.serv.put(this.id, this.obj).subscribe((data: any) => {
      this.router.navigateByUrl('/list-services');
    });
  }
}
