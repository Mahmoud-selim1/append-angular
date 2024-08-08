import { Component } from '@angular/core';
import { ServiceService } from 'src/app/apiServ/service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
})
export class ListServiceComponent {
  allData!: any[];
  showData() {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
  constructor(private serv: ServiceService) {
    this.showData();
    serv.auth();
  }
  deleteService(id: any) {
    this.serv.delete(id).subscribe((data: any) => {});
    this.showData();
  }
}
