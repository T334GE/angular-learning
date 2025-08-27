import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  loginFormular!: FormGroup
  formBuilder = inject(FormBuilder)
  

  ngOnInit(){
    this.buildLoginFormular()
  }

  buildLoginFormular(){
    return this.loginFormular = this.formBuilder.nonNullable.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

  onSubmit(){
    const userdata = this.loginFormular.getRawValue()
    console.log(userdata)
  }
}
