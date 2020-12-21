import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {


  profileForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl(''),
    roomId: new FormControl('')
  });

  closeResult: string;

  constructor(private apiService: ApiService,private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  @Input() card: Service;

  ngOnInit(): void {
  }

  deleteService(): void{
    this.apiService.deleteOne('service',this.card.id).subscribe(() => {});
  }

  onSubmit(): void {
    this.apiService.updateOne('service',this.card.id,this.profileForm.value).subscribe(() => {});
  }

}
