import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpedizioneService } from '../service/spedizione.service';


@Component({
  selector: 'app-spedizione',
  templateUrl: './spedizione.component.html',
  styleUrls: ['./spedizione.component.scss']
})
export class SpedizioneComponent implements OnInit {


  acquistaForm:FormGroup
  constructor(private fb: FormBuilder,private router: Router, private spedizioneService: SpedizioneService) { }
  isCollapsed = false;
  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
    if(this.sessionEmail==undefined){
      this.router.navigateByUrl("/login")
    }

    this.acquistaForm=this.fb.group({
      carta: ['', Validators.required],
      indirizzo: ['', Validators.required],
      cap: ['', Validators.required],
      citta: ['', Validators.required],
      nazione: ['', Validators.required],
      numeroCarta: ['', Validators.required],
      proprietarioCarta: ['', Validators.required],
      meseCarta: ['', Validators.required],
      annoCarta: ['', Validators.required],
      cvc: ['', Validators.required],

    })
  }


  acquista(){
    console.log("acquistato")
    console.log("carta: ",this.acquistaForm.value.carta)
    console.log("indirizzo: ",this.acquistaForm.value.indirizzo)
    console.log("cap: ",this.acquistaForm.value.cap)
    console.log("citta ",this.acquistaForm.value.citta)
    console.log("nazione ",this.acquistaForm.value.nazione)
    console.log("numero carta ",this.acquistaForm.value.numeroCarta)
    console.log("proprietario carta",this.acquistaForm.value.proprietarioCarta)
    console.log("mese carta",this.acquistaForm.value.meseCarta)
    console.log("anno carta",this.acquistaForm.value.annoCarta)
    console.log("cvc",this.acquistaForm.value.cvc)


  this.spedizioneService.createSpedizione(
    this.acquistaForm.value.carta,
    this.acquistaForm.value.indirizzo,
    this.acquistaForm.value.cap,
    this.acquistaForm.value.citta,
    this.acquistaForm.value.nazione,
    this.sessionEmail
   )    
   
   this.spedizioneService.paga( 
     this.acquistaForm.value.numeroCarta,
     this.acquistaForm.value.proprietarioCarta,
     this.acquistaForm.value.meseCarta,
     this.acquistaForm.value.annoCarta,
     this.acquistaForm.value.cvc)

  }

}
