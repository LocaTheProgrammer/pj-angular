import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private store: Store, private homeService: HomeService,private router: Router) {
    this.homeService.retrieveAllArticolos();

   }

   
 
  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
  }

   get articoli(): Observable<Articolo[]> {
     return this.store.pipe(select(selectArticolos));
    
   }

   redirect:string
   scopri(id:number){
     console.log(id)
     this.redirect="/dettaglio?id="+id;
     this.router.navigateByUrl(this.redirect)
   }
 


}
