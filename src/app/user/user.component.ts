import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { CustomerService } from '../core/services/customer.service';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  createForm = new FormGroup({
    name: new FormControl(''),
    roomid: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    totalPersons: new FormControl(''),
    bookingDays: new FormControl(''),
    advance: new FormControl('')
  });

  Customers: Customer[]

  constructor(private customerService: CustomerService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      s => {
        this.Customers = s;
      }
    );
    
  }

  onSubmit(): void {
    this.apiService.postOne('customer',this.createForm.value).subscribe(() => {});
  }

}
