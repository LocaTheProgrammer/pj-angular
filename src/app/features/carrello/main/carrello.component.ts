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

  constructor(private store: Store, private carrelloService: CarrelloService,private router: Router, private http: HttpCommunicationsService) {

    this.carrelloService.retrieveAllCarrelli()
   
  }



  sessionEmail:string
  totale:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
    if(this.sessionEmail==undefined){
      this.router.navigateByUrl("/login")
    }

    console.log("email di sessione: ",this.sessionEmail)
    
    this.getCarrelloTotale(this.sessionEmail).subscribe(cTot => {

      this.totale = cTot
     
            
    })

  }

  get carrelli(): Observable<Carrello[]> {
    return this.store.pipe(select(selectCarrellos));
   
  }
  
  
  url: string
  getCarrelloTotale(sessionEmail:string){
    this.url='carrelloTotale/findTotale'
    return this.http.retrievePostCall<CarrelloTotale>(this.url,sessionEmail).pipe()
  }


  rimuovi(id:string){
    console.log("id: ",id)
    this.carrelloService.rimuoviDalCarello(id.toString(),this.sessionEmail)
  }
  
  spedizione(){
    console.log(this.sessionEmail)
    this.router.navigateByUrl("/spedizione")
  }


  

}
