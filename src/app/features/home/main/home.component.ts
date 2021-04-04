import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos, selectArticolosHot } from 'src/app/redux/articolo';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  hotArt=[]
  constructor(private store: Store, private homeService: HomeService) {
    this.homeService.retrieveAllArticolos();
    this.homeService.retrieveAllHot();
   }

  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
  }

   get articoli(): Observable<Articolo[]> {
     return this.store.pipe(select(selectArticolos));
    
   }

  get articoliHot(): Observable<Articolo[]> {
    // console.log(this.store.pipe(select(selectArticolosHot)).subscribe(articoliHot=> {
    //   this.hotArt=articoliHot
    // }));
    return this.store.pipe(select(selectArticolosHot));
    
  }

 

  
}
