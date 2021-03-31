import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos } from 'src/app/redux/articolo';
import { HomeService } from '../../home/service/home.service';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.scss']
})
export class UomoComponent implements OnInit {

  hotArt=[]
  constructor(private store: Store, private homeService: HomeService) {
    this.homeService.retrieveAllArticolos();

   }

   
 
   ngOnInit():void  {
  
    

  }

   get articoli(): Observable<Articolo[]> {
     return this.store.pipe(select(selectArticolos));
    
   }

 


}
