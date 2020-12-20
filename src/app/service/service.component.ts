import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { ServiceService } from '../core/services/service.service';
import { Service } from '../shared/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  Services: Service[]

  createForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl(''),
    roomId: new FormControl('')
  });

  constructor(private serviceService: ServiceService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(
      s => {
        this.Services = s;
      }
    );
  }

  onSubmit(): void {
    this.apiService.postOne('service',this.createForm.value).subscribe(() => {});
  }

}
