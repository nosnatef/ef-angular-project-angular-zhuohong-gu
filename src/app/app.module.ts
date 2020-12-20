import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { RoomtypeCardComponent } from './shared/components/roomtype-card/roomtype-card.component';
import { RoomCardComponent } from './shared/components/room-card/room-card.component';
import { RoomComponent } from './room/room.component';
import { ServiceCardComponent } from './shared/components/service-card/service-card.component';
import { ServiceComponent } from './service/service.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServiceTextComponent } from './shared/components/service-text/service-text.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RoomtypeComponent,
    RoomtypeCardComponent,
    RoomCardComponent,
    RoomComponent,
    ServiceCardComponent,
    ServiceComponent,
    UserProfileComponent,
    ServiceTextComponent,
    UserComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
