import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  updateRoomForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute
  ) {
    this.updateRoomForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.getRoomById();
  }

  submitForm() {
     this.adminService.updateRoomDetails(this.id, this.updateRoomForm.value).subscribe(
       res => {
         this.message.success('Habitacion actualizada con exito!',{nzDuration:2000});
         this.router.navigateByUrl("/admin/dashboard")
       },
       error => {
         this.message.error('Error al actualizar datos');
       }
     );
  }

  getRoomById() {
    this.adminService.getRoomById(this.id).subscribe(
      res => {
        this.updateRoomForm.patchValue(res);
      },
      error => {
        this.message.error(`${error.error}`, { nzDuration: 3000 });
      }
    );
  }
}
