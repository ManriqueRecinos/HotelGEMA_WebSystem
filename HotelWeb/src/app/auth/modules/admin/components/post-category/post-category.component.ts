import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrl: './post-category.component.scss'
})
export class PostCategoryComponent {

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.categoryForm.valid) {
      this.adminService.addCategory(this.categoryForm.value).subscribe(
        res => {
          this.message.success(
            `Categoría guardada con éxito`,
            { nzDuration: 3000 }
          );
          this.router.navigateByUrl('/admin/dashboard');
        },
        error => {
          this.message.error(
            `${error.error}`,
            { nzDuration: 3000 }
          );
        }
      );
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
