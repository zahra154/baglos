import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class StorageService {


  constructor() {
  }

  clear(storage: Storage) {
    storage.clear();
  }

  removeItem(storage : Storage ,key: string) {
    if(!key) return;
    storage.removeItem(key);
  }


  setItem<T>(storage: Storage ,key: string, item: T | null): void {
    storage.setItem(key, JSON.stringify(item));
  }


  getItem<T>(storage: Storage , key: string): T | null {
    let data: any = storage.getItem(key);
    if (!data) return null;
    let obj: T | null;

    try {
      obj = JSON.parse(data) as T ;
    } catch  (error) {
      obj = null;
    }

    return obj;
  }


}
