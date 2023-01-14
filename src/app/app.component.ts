import { Component, OnInit } from '@angular/core';
import { PreferencesService } from "./@shared/services/preferences.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title: string;

  constructor(private preference: PreferencesService) {
    this.preference.setThemeColor('light');
    this.preference.setLang('fa');
  }

  ngOnInit(): void {

  }
}
