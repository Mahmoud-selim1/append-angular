import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApifunctionsService } from 'src/app/apiServ/apifunctions.service';
import { BlogService } from 'src/app/apiServ/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent {
  obj = new Blog();
  constructor(private serv: BlogService, private router: Router) {
    serv.auth();
  }
  createBlog() {
    this.serv.create(this.obj).subscribe((data: any) => {
      this.router.navigateByUrl('/list-blog');
    });
  }
}
