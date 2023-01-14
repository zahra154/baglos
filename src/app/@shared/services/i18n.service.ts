import {Injectable} from '@angular/core';
import {LangChangeEvent, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs';
import {PreferencesService} from "./preferences.service";

@Injectable({
  providedIn: 'root',
})
export class I18nService implements TranslateLoader {

    constructor(private translate: TranslateService , private preferencesService: PreferencesService ) {

      // translate.addLangs(['en', 'da']);
      // translate.setDefaultLang('en');
      //
      // const browserLang = translate.getBrowserLang();
      // translate.use(browserLang?.match(/en|da/) ? browserLang : 'en');

    }


    getTranslation(lang: string): Observable<any> {
         //return of({KEY: 'value'});

      return this.preferencesService.getPreferences();

    }

    setLanguage(lang: string){
   //   this.translate.setDefaultLang(lang);
    //  this.preferencesService.setLang(lang);
    }



  translateToFarsi(language: string){
    this.translate.use('fa');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'fa')
      {
        // platform.setDir('rtl', true);
        // platform.setDir('ltr', false);
      }
      else
      {
        // platform.setDir('ltr', true);
        // platform.setDir('rtl', false);
      }
    });
  }

}
