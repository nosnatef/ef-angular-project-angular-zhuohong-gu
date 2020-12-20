import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { RoomtypeService } from '../core/services/roomtype.service';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {

  roomTypes: RoomType[]

  createForm = new FormGroup({
    description: new FormControl(''),
    rent: new FormControl('')
  });

  constructor(private roomTypeService : RoomtypeService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(
      r => {
        this.roomTypes = r;
      }
    )
  }

  onSubmit(): void {
    this.apiService.postOne('roomtype',this.createForm.value).subscribe(() => {});
  }

}
