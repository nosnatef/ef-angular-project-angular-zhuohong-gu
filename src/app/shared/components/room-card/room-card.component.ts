import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';
import { Room } from '../../models/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  profileForm = new FormGroup({
    roomtypeid : new FormControl('')
  });

  closeResult: string;

  constructor(private apiService: ApiService,private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  @Input() card: Room;

  ngOnInit(): void {
    
  }

  deleteRoomType(): void{
    this.apiService.deleteOne('room',this.card.id).subscribe(() => {});
  }

  onSubmit(): void {
    this.apiService.updateOne('room',this.card.id,{
      ...this.profileForm.value,
      status: this.card.status
    }).subscribe(() => {});
  }

}
