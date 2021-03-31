import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos, selectArticolosHot } from 'src/app/redux/articolo';
import { HomeService } from '../../home/service/home.service';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.scss']
})
export class DonnaComponent implements OnInit {

  hotArt=[]
  constructor(private store: Store, private homeService: HomeService) {
    this.homeService.retrieveAllArticolos();
    this.homeService.retrieveAllHot();
   }

   
   delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
  async ngOnInit() {
    await this.delay(10000000)
    

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
