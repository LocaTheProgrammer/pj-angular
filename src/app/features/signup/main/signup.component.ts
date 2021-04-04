import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup

  //constructor(private store: Store, private router: Router, private LoginService: LoginService, ) { }
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      data: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  eseguiSignUpUtente(){
    console.log("login utente")
    console.log("email: ", this.signUpForm.value.email)
    console.log("password: ", this.signUpForm.value.password)
  }
}
