import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  currentPage = 1;
  rooms = [];
  total: any;
  loading = false;


  constructor(private adminService: AdminService,
    private message: NzMessageService,
    private modalService: NzModalService
  ){
    this.getRooms();
  }

  getRooms(){
    this.adminService.getRooms(this.currentPage -1 ).subscribe(res => {
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalPages * 5;
   })
  }

  pageIndexChange(value: any){
    this.currentPage = value;
    this.getRooms();
  }
  

  showConfirm(roomId:number){
    this.modalService.confirm({
      nzTitle: 'Confirmar',
      nzContent: '¿Desea eliminar la habitación?',
      nzOkText: 'Sí',
      nzCancelText:'Cancelar',
      nzOnOk:()=>this.deleteRoom(roomId)
    })
  }

  deleteRoom(roomId:number){
    this.adminService.deleteRoom(roomId).subscribe(res=>{
      this.message.success('Habitacion eliminada con exito',{nzDuration:2000});
      this.getRooms();
    },error=>{
      this.message.error('Error al eliminar habitacion',{nzDuration:2000});
    })
  }

}
