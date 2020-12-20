import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { RoomType } from '../../models/roomtype';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-roomtype-card',
  templateUrl: './roomtype-card.component.html',
  styleUrls: ['./roomtype-card.component.css']
})
export class RoomtypeCardComponent implements OnInit {


  profileForm = new FormGroup({
    description: new FormControl(''),
    rent: new FormControl('')
  });

  closeResult: string;

  constructor(private apiService: ApiService,private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  @Input() card: RoomType;

  ngOnInit(): void {
  }

  deleteRoomType(): void{
    this.apiService.deleteOne('roomtype',this.card.id).subscribe(() => {});
  }

  onSubmit(): void {
    this.apiService.updateOne('roomtype',this.card.id,this.profileForm.value).subscribe(() => {});
  }

}
