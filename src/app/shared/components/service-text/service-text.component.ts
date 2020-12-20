import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../models/service';

@Component({
  selector: 'app-service-text',
  templateUrl: './service-text.component.html',
  styleUrls: ['./service-text.component.css']
})
export class ServiceTextComponent implements OnInit {

  constructor() { }

  @Input() service: Service;

  ngOnInit(): void {
  }

}
