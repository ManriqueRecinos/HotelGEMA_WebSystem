import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

import { NzMessageModule } from 'ng-zorro-antd/message';
import { PostCategoryComponent } from './components/post-category/post-category.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostRoomComponent,
    UpdateRoomComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzMessageModule,
    FormsModule,
  ]
})
export class AdminModule { }
