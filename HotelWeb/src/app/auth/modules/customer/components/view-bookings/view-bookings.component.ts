import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { error } from 'console';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.scss'
})
export class ViewBookingsComponent {

currentPage: any = 1;
total: any;
bookings: any;

constructor(private customerService: CustomerService,
  private message : NzMessageService
) {
  this.getBookings();
}

getBookings(){
  this.customerService.getMyBookings(this.currentPage-1).subscribe(res => {
    console.log(res);
    this.bookings = res.reservationDtoList;
    this.total = res.totalPages*5;
  },error=>{
    this.message.error(`${error.error}`,{nzDuration: 2000})
  })
}

pageIndexChange(value:any){
  this.currentPage = value;
  this.getBookings();
}

}
