import { Component } from '@angular/core';
import { ApifunctionsService } from '../apiServ/apifunctions.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blogs';
import { BlogService } from '../apiServ/blog.service';

@Component({
  selector: 'app-static-blog',
  templateUrl: './static-blog.component.html',
  styleUrls: ['./static-blog.component.css'],
})
export class StaticBlogComponent {
  id!: any;
  obj = new Blog();
  constructor(private serv: BlogService, private activeRout: ActivatedRoute) {
    this.id = activeRout.snapshot.params?.['id'];
    this.view();
  }
  view() {
    this.serv.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    });
  }
}
