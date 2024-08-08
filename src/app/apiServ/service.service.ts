import { Injectable } from '@angular/core';
import { ApifunctionsService } from './apifunctions.service';
import { ServicesModel } from '../models/servicesModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService extends ApifunctionsService<ServicesModel> {
  constructor(
    public override http: HttpClient,
    protected override router: Router
  ) {
    super(http, 'http://localhost:3000/services', router);
  }
}
