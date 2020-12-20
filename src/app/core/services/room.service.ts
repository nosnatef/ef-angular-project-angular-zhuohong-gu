import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/models/room';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apiService: ApiService) { }

  getAllRooms(): Observable<Room[]> {
    var response = this.apiService.getAll('room');
    
    return response;
  }

  getRoom(id:number): Observable<Room>{
    var response = this.apiService.getOne('room',id);
    return response;
  }
}
