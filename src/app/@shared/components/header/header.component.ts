import {Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor( ) {

  }

  ngAfterContentInit() {
    const timeNow = new Date().toLocaleTimeString('fa-IR');
    // this.setTimerValue(timeNow, true);
  }
  ngOnInit(): void {  };

  ngOnDestroy(): void {

  }


}
