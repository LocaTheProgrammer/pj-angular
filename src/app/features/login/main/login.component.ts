import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  //constructor(private store: Store, private router: Router, private LoginService: LoginService, private fb: FormBuilder) { }
  constructor(){}
  ngOnInit(): void {
  }
  eseguiLoginUtente(){
    console.log("login utente")
  }
}
