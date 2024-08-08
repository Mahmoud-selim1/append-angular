import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { AdminModel } from '../models/adminModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends ApifunctionsService<AdminModel> {
  constructor(
    public override http: HttpClient,
    protected override router: Router
  ) {
    super(http, 'http://localhost:3000/admin', router);
  }
}
