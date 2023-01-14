import {Injectable} from "@angular/core";
import {Preferences} from "../models/preferences.model";
import {StorageService} from "./storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  defaultData: Preferences | null = {
    theme: 'light',
    firstRun: true,
    lang: 'fa'
  };

  data: Preferences | null = this.defaultData;

  constructor(private storageService: StorageService , private translate: TranslateService) {
  }

  setThemeColor(color: string) {
    if (this.data) {
      this.data.theme = color;
      document.body.classList.add(color);
      this.storageService.setItem(localStorage, 'preferences', this.data)
    }
  }

  setLang(lang: string) {
    if (this.data) {
      this.data.lang = lang;
      this.translate.use(lang);
      this.storageService.setItem(localStorage, 'preferences', this.data)
    }
  }

  getPreferences(): Observable<Preferences | null> {
    const preferences = new BehaviorSubject(this.defaultData);
    preferences.next(this.storageService.getItem(localStorage, 'preferences'));
    return preferences;
  }


}
