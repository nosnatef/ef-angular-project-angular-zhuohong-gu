import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../core/services/customer.service';
import { RoomService } from '../core/services/room.service';
import { Customer } from '../shared/models/customer';
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  id: number;
  customer: Customer

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.id = +p.get('id');
      this.customerService.getCustomer(this.id).subscribe((r) => {
        this.customer = r;
      });
    })
  }

}
