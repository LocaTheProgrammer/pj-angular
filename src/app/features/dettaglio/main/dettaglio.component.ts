import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos } from 'src/app/redux/articolo';
import { HomeService } from '../../home/service/home.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  constructor(private store: Store, private fb:FormBuilder, private route: ActivatedRoute,private homeService: HomeService) { }
  id:string
  sessionEmail:any

  aggiungiAlCarrelloForm:FormGroup

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });
  this.sessionEmail=sessionStorage.getItem('email')
    console.log("id: ",this.id)
    this.homeService.retrieveAllArticolos();


    this.aggiungiAlCarrelloForm=this.fb.group({
      taglia: ['', Validators.required],
      quantita: ['', Validators.required]
    })
  }

  get articoli(): Observable<Articolo[]> {
    return this.store.pipe(select(selectArticolos));
   
  }

  aggiungiAlCarrello(){
    console.log("sessionEmail: ", this.sessionEmail)
    console.log("taglia: ",this.aggiungiAlCarrelloForm.value.taglia)
    console.log("quantita: ",this.aggiungiAlCarrelloForm.value.quantita)
    
  }


}