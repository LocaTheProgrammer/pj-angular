import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  //constructor(private store: Store, private router: Router, private LoginService: LoginService, ) { }
  constructor(private fb: FormBuilder, private loginService:LoginService){}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  eseguiLoginUtente(){
    this.loginService.executeLogin(this.loginForm.value.email,this.loginForm.value.password)
  }
}
