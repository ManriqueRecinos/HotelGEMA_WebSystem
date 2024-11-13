import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CuartosComponent } from './components/cuartos/cuartos.component';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';


@NgModule({
  declarations: [
    CustomerComponent,
    CuartosComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class CustomerModule { }
