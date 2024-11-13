import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrl: './cuartos.component.scss'
})
export class CuartosComponent {

  currentPage = 1;
  rooms = [];
  total:any;
  loading = false;


  constructor(private customerService: CustomerService,
    private message: NzMessageService,
    private modalService: NzModalService
  ){
    this.getRooms();
  }

  getRooms(){
    this.customerService.getRooms(this.currentPage -1 ).subscribe(res => {
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalPages * 1;
   })
  }

  pageIndexChange(value: any){
    this.currentPage = value;
    this.getRooms();
  }

}
