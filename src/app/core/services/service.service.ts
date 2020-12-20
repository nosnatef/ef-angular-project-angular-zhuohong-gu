import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/shared/models/service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private apiService: ApiService) { }

  getAllServices() :Observable<Service[]> {
    var response = this.apiService.getAll('service');
    return response;
  }
}
