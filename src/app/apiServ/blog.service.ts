import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { Blog } from '../models/blogs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends ApifunctionsService<Blog> {
  constructor(
    protected override http: HttpClient,
    protected override router: Router
  ) {
    super(http, 'http://localhost:3000/blogs', router);
  }
}
