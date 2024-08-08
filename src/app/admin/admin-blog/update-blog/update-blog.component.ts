import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifunctionsService } from 'src/app/apiServ/apifunctions.service';
import { BlogService } from 'src/app/apiServ/blog.service';
import { Blog } from 'src/app/models/blogs';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css'],
})
export class UpdateBlogComponent {
  id!: any;
  obj = new Blog();
  constructor(
    private serv: BlogService,
    private activeRout: ActivatedRoute,
    private route: Router
  ) {
    serv.auth();
    this.id = activeRout.snapshot.params?.['id'];
    serv.getById(this.id).subscribe((data: any) => {
      this.obj = data;
    });
  }
  updateInfo() {
    this.serv.put(this.id, this.obj).subscribe((data: any) => {
      this.route.navigateByUrl('/list-blog');
    });
  }
}
