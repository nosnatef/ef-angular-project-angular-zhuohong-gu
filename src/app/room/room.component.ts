import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { RoomService } from '../core/services/room.service';
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[]

  createForm = new FormGroup({
    roomtypeid: new FormControl('')
  });

  constructor(private roomTypeService : RoomService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRooms().subscribe(
      r => {
        this.rooms = r;
      }
    )
  }

  onSubmit(): void {
    this.apiService.postOne('room',this.createForm.value).subscribe(() => {});
  }
}
