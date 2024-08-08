import { Component } from '@angular/core';
import { ApifunctionsService } from 'src/app/apiServ/apifunctions.service';
import { BlogService } from 'src/app/apiServ/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  allData!: any[];
  constructor(private serv: BlogService) {
    this.viewBlogs();
  }
  viewBlogs() {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
}
