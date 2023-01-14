import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class MainLayoutComponent implements OnInit {
  constructor() { }


  ngOnInit(): void {  }


  public getMainContentHeight(): string{
    return 'calc(100% - 136px)';
  }
}
