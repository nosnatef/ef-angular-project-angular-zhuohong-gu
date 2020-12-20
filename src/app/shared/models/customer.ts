import { Room } from "./room";

export interface Customer{
  id: number;
  room: Room;
  roomId:number;
  name: string;
  address: string;
  phone: string;
  email: string;
  checkin: Date;
  totalPersons: number;
  bookingDays: number;
  advance: number;
}