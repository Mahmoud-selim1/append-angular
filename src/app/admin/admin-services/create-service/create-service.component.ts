import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/apiServ/service.service';
import { ServicesModel } from 'src/app/models/servicesModel';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
})
export class CreateServiceComponent {
  obj = new ServicesModel();
  constructor(private serv: ServiceService, private router: Router) {
    serv.auth();
  }
  add() {
    this.serv.create(this.obj).subscribe((data: any) => {
      this.router.navigateByUrl('/list-services');
    });
  }
}
