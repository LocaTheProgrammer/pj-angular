import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risultatospedizione',
  templateUrl: './risultatospedizione.component.html',
  styleUrls: ['./risultatospedizione.component.scss']
})
export class RisultatospedizioneComponent implements OnInit {

  constructor(private router: Router) { }

  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
    if(this.sessionEmail==undefined){
      this.router.navigateByUrl("/login")
    }
  }
}
