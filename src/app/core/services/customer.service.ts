import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/shared/models/customer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService) { }

  getAllCustomers() :Observable<Customer[]> {
    var response = this.apiService.getAll('customer');
    return response;
  }

  getCustomer(id:number): Observable<Customer>{
    var response = this.apiService.getOne('customer',id);
    return response;
  }
}
