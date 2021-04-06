import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-spedizione',
  templateUrl: './spedizione.component.html',
  styleUrls: ['./spedizione.component.scss']
})
export class SpedizioneComponent implements OnInit {

  constructor() { }
  isCollapsed = false;
  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
  }

}
