import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {


  closeResult: string;

  profileForm = new FormGroup({
    name: new FormControl(''),
    roomid: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    totalPersons: new FormControl(''),
    bookingDays: new FormControl(''),
    advance: new FormControl('')
  });

  @Input() card: Customer;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  constructor(private apiService: ApiService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteCustomer(): void{
    this.apiService.deleteOne('customer',this.card.id).subscribe(() => {});
  }

  onSubmit(): void {
    this.apiService.updateOne('customer',this.card.id,this.profileForm.value).subscribe(() => {});
  }

}
