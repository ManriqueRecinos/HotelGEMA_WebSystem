import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './components/rooms/rooms.component';


@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class CustomerModule { }
