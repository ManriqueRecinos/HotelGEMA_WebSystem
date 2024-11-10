import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router){}

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password:[null,Validators.required],
      name:[null, Validators.required]
    })
  }
  
  submitForm() {
    if (this.registerForm.invalid) {
      this.message.error('Por favor, complete todos los campos correctamente.', { nzDuration: 5000 });
      return;
    }
  
    this.authService.register(this.registerForm.value).pipe(
      catchError((error) => {
        this.message.error('Error de conexión. Intente nuevamente más tarde.', { nzDuration: 5000 });
        return throwError(() => new Error(error));
      })
    ).subscribe({
      next: (res) => {
        if (res.id != null) {
          this.message.success("Registro realizado con éxito", { nzDuration: 5000 });
          this.router.navigateByUrl("/");
        } else {
          this.message.error(`${res.message}`, { nzDuration: 5000 });
        }
      },
      error: (error) => {
        console.error('Error en la solicitud:', error);
      }
    });
  }
  
}