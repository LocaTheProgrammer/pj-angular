import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/core/model/Utente.interface';
import { selectUtentes } from 'src/app/redux/utente';
import { ProfiloService } from '../service/profilo.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  
  
  updateUtenteForm:FormGroup
  sessionEmail:any
  constructor(private profiloService:ProfiloService, private store:Store, private fb:FormBuilder) {
    this.profiloService.retrieveAllUtenti();
   }

  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')

    this.updateUtenteForm=this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      data: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get utenti():Observable<Utente[]> {
    return this.store.pipe(select(selectUtentes));
   
  }

  updateUtente(){
    this.profiloService.updateUtente(this.updateUtenteForm.value.email,this.updateUtenteForm.value.password,this.updateUtenteForm.value.nome,this.updateUtenteForm.value.cognome,this.updateUtenteForm.value.data)
  }

}
