import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifunctionsService } from 'src/app/apiServ/apifunctions.service';
import { BlogService } from 'src/app/apiServ/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css'],
})
export class ListBlogComponent {
  allData!: any[];

  showData() {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
  constructor(private serv: BlogService) {
    this.showData();
    serv.auth();
  }
  deleteBlog(id: any) {
    this.serv.delete(id).subscribe((data: any) => {
      console.log(data);
      this.showData();
    });
  }
}
