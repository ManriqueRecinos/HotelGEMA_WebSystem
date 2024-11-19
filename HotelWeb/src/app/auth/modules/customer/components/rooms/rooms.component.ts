import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CustomerService } from '../../service/customer.service';
import { UserStorageService } from '../../../../services/storage/user-storage.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  
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
      this.total = res.totalPages * 5;
   })
  }

  pageIndexChange(value: any){
    this.currentPage = value;
    this.getRooms();
  }

  isVisibleMiddle = false;
  date: Date[]=[];
  checkInDate: Date;
  checkOutDate: Date;
  id: number;

  onChange(result: Date[]){
    if(result.length ===2){
      this.checkInDate = result[0];
      this.checkOutDate = result[1];
    }
  }

  handleCancelMiddle(){
    this.isVisibleMiddle = false;
  }

  handleOkMiddle(): void{
    const obj ={
      userId: UserStorageService.getUserId(),
      roomId: this.id,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate
    }
    this.customerService.bookRoom(obj).subscribe(res=>{
      this.message.success(`Solicitud enviada para aprovacion!`,{nzDuration:2000});
      this.isVisibleMiddle = false;
    },error=>{
      this.message.error(`${error.error}`,{nzDuration:2000})
    })
  }

  showModalMiddle(id:number){
    this.id=id;
    this.isVisibleMiddle = true;
  }

}
