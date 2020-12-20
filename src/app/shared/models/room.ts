import { RoomType } from "./roomtype";
import { Service } from "./service";

export interface Room{
  id: number;
  roomtypeid: string;
  status: number;
  roomType: RoomType;
  services: Service[];
}