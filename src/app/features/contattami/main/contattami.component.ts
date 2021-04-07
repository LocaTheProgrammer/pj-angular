import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contattami',
  templateUrl: './contattami.component.html',
  styleUrls: ['./contattami.component.scss']
})
export class ContattamiComponent implements OnInit {

  constructor() { }

  sessionEmail:any
  ngOnInit(): void {
    this.sessionEmail=sessionStorage.getItem('email')
  }


}
