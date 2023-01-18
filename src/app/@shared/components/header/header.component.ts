import {Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerList = [
    {title:'Home'  , link: 'home'},
    {title:'All Course'  , link: '/courses'},
    {title:'Sign Up'  , link: '/auth/signup'},
    {title:'My Course'  , link: '/courses/my-course'},

    ]

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
