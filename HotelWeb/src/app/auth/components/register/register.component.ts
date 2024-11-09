import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;
isDisabled: unknown;

  constructor(private fb: FormBuilder,){}

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password:[null,Validators.required],
      name:[null, Validators.required]
    })
  }

}