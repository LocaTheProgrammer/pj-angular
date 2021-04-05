import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Carrello } from 'src/app/core/model/Carrello.interface';
import { selectCarrellos } from 'src/app/redux/carrello';
import { CarrelloService } from '../service/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  constructor(private store: Store, private carrelloService: CarrelloService,private router: Router) {

    this.carrelloService.retrieveAllCarrelli()
    this.carrelloService.retrieveTotale()
  }



  sessionEmail:string
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
    console.log("email di sessione: ",this.sessionEmail)
  }

  get carrelli(): Observable<Carrello[]> {
    return this.store.pipe(select(selectCarrellos));
   
  }

}
