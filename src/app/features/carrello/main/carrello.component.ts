import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Carrello } from 'src/app/core/model/Carrello.interface';
import { CarrelloTotale } from 'src/app/core/model/CarrelloTotale.interface';
import { selectCarrellos } from 'src/app/redux/carrello';
import { selectCarrelloTotales } from 'src/app/redux/totale';
import { CarrelloService } from '../service/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  constructor(private store: Store, private carrelloService: CarrelloService,private router: Router) {

    this.carrelloService.retrieveAllCarrelli()
    //this.carrelloService.retrieveTotale()
  }



  sessionEmail:string
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
    console.log("email di sessione: ",this.sessionEmail)
    
   
  }

  get carrelli(): Observable<Carrello[]> {
    return this.store.pipe(select(selectCarrellos));
   
  }
  
  // get carrelloTotale(): Observable<CarrelloTotale[]>{
  //   return this.store.pipe(select(selectCarrelloTotales));
  // }

  


  

}
