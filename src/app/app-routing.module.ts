import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { ServiceComponent } from './service/service.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
  path: 'roomtype', component: RoomtypeComponent
},
{
  path: 'room', component: RoomComponent
},
{
  path: 'service', component: ServiceComponent
},
{
  path: 'customer/:id', component:UserProfileComponent
},{
  path: '', component: UserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
