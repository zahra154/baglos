import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent {

  document = document
  footerInfo = [];

  constructor(private translate: TranslateService, private router: Router) {
    translate.get(['footer']).subscribe(translations => {

    })
    this.footerInfo = [
      {
        routerLink: '/portfolio',
        routerLinkActiveStatus: 'portfolio',
        icon: 'portfolio',
        title: 'پرتفوی'
      },
      {
        routerLink: '/orders',
        routerLinkActiveStatus: 'orders',
        icon: 'orders',
        title: 'سفارشات'
      },
      {
        routerLink: '/watchlist',
        routerLinkActiveStatus: 'watchlist',
        icon: 'watchlist',
        title: 'دیده بان'
      },
      {
        routerLink: '/search',
        routerLinkActiveStatus: 'search',
        icon: 'search',
        title: 'جستجو'
      },
      {
        routerLink: '/more',
        routerLinkActiveStatus: 'more',
        icon: 'more',
        title: 'سایر'
      },
    ];

  }



  activeCheck(element) {

      return this.router.url.includes(element)
    }


}
